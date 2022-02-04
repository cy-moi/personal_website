# Rust学习笔记

安装rust，[上手网站](https://www.rust-lang.org/tools/install)。搞rust本来是为了玩一下新的图形引擎[Rapier](https://rapier.rs/)，[github repo](https://github.com/dimforge/rapier)看了下代码很好理解，是不可多得赏心悦目型引擎。还有一个用Rust的3D全局光渲染引擎[Kajiya](https://github.com/EmbarkStudios/kajiya)，感觉也挺不错的，好像就是embark（rapier赞助商）搞的，看来embark是all in rust了。调研过程中还发现了一个好玩的人[Davis Remmel](http://www.davisr.me/projects/)，全职在做free software，牛逼。2D的渲染引擎我也看了几个https://github.com/servo/pathfinder 和https://github.com/nical/lyon 好像都还可以。紧要任务是入门rust，其他的可以后面细看。

Rust的包管理工具叫cargo，原理和npm差不多，非常neat & clean。Rust运行效率高，代码可读性强，至少目前看上去没什么坑。

由于我的C和C++基础并不扎实，所以通过学rust也算巩固了下计算机集成和硬件的基础知识。

看Rapier有点太复杂，我决定从这个pinball项目入手。这是一个基于rapier实现的pinball小游戏，我随便找的。

上来先`Cargo run --release`

这个release应该是package.json里类似script定义的东西，cargo的manifest里叫profile。就喝package.json一样，cargo有一个Cargo.toml，pinball的这个文件如下，结构还是比较清晰明了的，我做了一些注释帮助理解：

```jsx
[package]
name = "pinball2d"
version = "0.1.0"
// optional
edition = "2021" // affects which Rust Edition your package is compiled with
// this 2021 version might be the default fill from cargo new

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
bevy = "0.6"
# bevy_rapier2d = "0.12.1"
bevy_rapier2d = { git = "https://github.com/dimforge/bevy_rapier", tag = "v0.12.1" }
bevy_prototype_lyon = "0.4.0"

#[profile.release]
# opt-level = 's'
```

这里面没有用到lib和bin，但我简单看了下，大概和C++的打包差不多：

```rust
// The library target defines a "library" that 
// can be used and linked by other libraries and executables. 
// Example of customizing the library in Cargo.toml.
[lib]
crate-type = ["cdylib"]
bench = false

// Binary targets are executable programs 
// that can be run after being compiled.

[[bin]]
name = "cool-tool"
test = false
bench = false

[[bin]]
name = "frobnicator"
required-features = ["frobnicate"]
```

还有一些类似`[test], [example], [bench],[workspace],[features],[doc]`这种我觉得目前我应该也用不到，就先跳过了。

着重看一下dependencies，包管理的部分应该比较重要。pinball例子的dependencies写的比较简略，就是直接版本号，bevy_rapier用的是git上特定版本，这个好像还挺特别的。

```jsx
[dependencies]
bevy = "0.6"
bevy_rapier2d = { git = "https://github.com/dimforge/bevy_rapier", tag = "v0.12.1" }
```

官网上的用法比npm更加别致一点，可选的东西还挺多，自由度挺大的，不过一眼看过去好晕还是算了，以后用到再说吧。。。

```jsx
// Dependencies can be marked "optional", 
// which means they will not be compiled by default.
[dependencies]
ravif = { version = "0.6.3", optional = true }
rgb = { version = "0.8.25", optional = true }

[dependencies]
# Enables the `derive` feature of serde.
serde = { version = "1.0.118", features = ["derive"] }
flate2 = { version = "1.0.3", default-features = false, features = ["zlib"] }
```

profile官网上写了很多，用了单独的一个[小节](https://doc.rust-lang.org/cargo/reference/profiles.html)，

Cargo has 4 built-in profiles: `dev`, `release`, `test`, and `bench` 除此之外还可以自定义。cargo install会默认选择release profile，如果使用release profile就是`--release` 自定义的要用`--profile xxx`

```jsx
// the default settings for dev profile
[profile.dev]
opt-level = 0
debug = true
split-debuginfo = '...'  # Platform-specific.
debug-assertions = true
overflow-checks = true
lto = false
panic = 'unwind'
incremental = true
codegen-units = 256
rpath = false

// the default settings for release profile
[profile.release]
opt-level = 3
debug = false
split-debuginfo = '...'  # Platform-specific.
debug-assertions = false
overflow-checks = false
lto = false
panic = 'unwind'
incremental = false
codegen-units = 16
rpath = false
```

比较值得一提的是opt-level → level of optimization:

- `0`: no optimizations
- `1`: basic optimizations
- `2`: some optimizations
- `3`: all optimizations
- `"s"`: optimize for binary size
- `"z"`: optimize for binary size, but also turn off loop vectorization.

不同的等级对于不同的项目有不一样的效果，所以推荐是都试一下选最合适的。

编好的profile在`target`目录下面，比如release的就是在`target/release`.

如果没有指明profile的话，`[cargo build](https://doc.rust-lang.org/cargo/commands/cargo-build.html)`, `[cargo rustc](https://doc.rust-lang.org/cargo/commands/cargo-rustc.html)`, `[cargo check](https://doc.rust-lang.org/cargo/commands/cargo-check.html)`, and `[cargo run](https://doc.rust-lang.org/cargo/commands/cargo-run.html)` 会默认运行`dev`，其余的`cargo test`对应`test`， `cargo bench`对应`bench`，`cargo install`对应`release`。

总的来说我觉得cargo非常powerful，集makefile和npm包管理于一身的脚本，就是有点学习门槛，估计每次做都要看半天文档。。。
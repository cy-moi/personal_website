#!/usr/bin/python3

import cv2

# load the overlay image. size should be smaller than video frame size
img = cv2.imread('cover.png', cv2.IMREAD_UNCHANGED)
img = cv2.resize(img, (int(257/2), int(237/2)))
# Get Image dimensions
img_height, img_width, channel = img.shape

# Start Capture
cap = cv2.VideoCapture('demoMagic.m4v')

# Get frame dimensions
frame_width  = cap.get(cv2.CAP_PROP_FRAME_WIDTH )
frame_height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT )

# Print dimensions
print('image dimensions (HxW):',img_height,"x",img_width, channel)
print('frame dimensions (HxW):',int(frame_height),"x",int(frame_width))
fourcc = cv2.VideoWriter_fourcc(*'MP4V')
out = cv2.VideoWriter('demoMagic.mp4', fourcc, 60.0, (int(frame_width),int(frame_height)))

# Check if camera opened successfully
if (cap.isOpened()== False):
		print("Error opening video stream or file")

# Decide X,Y location of overlay image inside video frame.
# following should be valid:
#   * image dimensions must be smaller than frame dimensions
#   * x+img_width <= frame_width
#   * y+img_height <= frame_height
# otherwise you can resize image as part of your code if required

x = 300
y = 200
x2 = 950

alpha_s = img[:, :, 3] / 255.0
alpha_l = 1.0 - alpha_s

while(True):
    # Capture frame-by-frame
    ret, frame = cap.read()

    # add image to frame
    for c in range(0, 3):
        frame[y:y+img_height, x:x+img_width, c] = (alpha_s * img[:, :, c] + alpha_l * frame[y:y+img_height, x:x+img_width, c])
        frame[y:y+img_height, x2:x2+img_width, c] = (alpha_s * img[:, :, c] + alpha_l * frame[y:y+img_height, x2:x2+img_width, c])
    # frame = cv2.addWeighted(frame, 1, )
    # frame[ y:y+img_height , x:x+img_width ] = img
    # frame[ y:y+img_height , x2:x2+img_width ] = img
    out.write(frame)
    # Display the resulting frame
    cv2.imshow('frame',frame)

    # Exit if ESC key is pressed
    if cv2.waitKey(20) & 0xFF == 27:
        break

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()
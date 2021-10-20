# Clevo Keyboard Standalone Application
This is a standalone application for adjusing Clevo Keyboard settings on Linux. Kernal module for keyboard backlighting must already be installed. 

https://github.com/tuxedocomputers/tuxedo-keyboard

You must give 666 permissions to color_* device files at /sys/devices/platform/clevo_keyboard

Note: It is at your own risk! With this operation everbody on your computer can write to your tuxedo-keyboard settings.

# Running

Start by downloading dependencies 
`npm i`

Then run the program
`npm run start`

# Expansion
I would like to control the sides of the keyboard seperately, be able to enter hex values, and possibly add sliders or color wheels. In the future I would also like to add rainbow settings. This is all I had time to do for now.
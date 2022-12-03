   // what is this?
   // this is for the iframe's frontend on evan.systems/birthday. this manages the favicon.
   // i split a trollge gif (exploding a gif) with ezgif, then simply slap them on the favicon images array and iterate through them.

   var favicon_images = [
           'f/frame_00_delay-0.1s.gif',
           'f/frame_01_delay-0.1s.gif',
           'f/frame_02_delay-0.1s.gif',
           'f/frame_03_delay-0.1s.gif',
           'f/frame_04_delay-0.1s.gif',
           'f/frame_05_delay-0.1s.gif',
           'f/frame_06_delay-0.1s.gif',
           'f/frame_07_delay-0.1s.gif',
           'f/frame_08_delay-0.1s.gif',
           'f/frame_09_delay-0.1s.gif',
           'f/frame_10_delay-0.1s.gif',
           'f/frame_11_delay-0.1s.gif',
           'f/frame_12_delay-0.1s.gif',
           'f/frame_13_delay-0.1s.gif',
           'f/frame_14_delay-0.1s.gif',
           'f/frame_15_delay-0.1s.gif',
           'f/frame_16_delay-0.1s.gif',
           'f/frame_17_delay-0.1s.gif',
           'f/frame_18_delay-0.1s.gif',
           'f/frame_19_delay-0.1s.gif',
           'f/frame_20_delay-0.1s.gif',
           'f/frame_21_delay-0.1s.gif',
           'f/frame_22_delay-0.1s.gif',
           'f/frame_23_delay-0.1s.gif',
           'f/frame_24_delay-0.1s.gif',
           'f/frame_25_delay-0.1s.gif',
           'f/frame_26_delay-0.1s.gif',
           'f/frame_27_delay-0.1s.gif',
           'f/frame_28_delay-0.1s.gif',
           'f/frame_29_delay-0.1s.gif',
           'f/frame_30_delay-0.1s.gif',
           'f/frame_31_delay-0.1s.gif',
           'f/frame_32_delay-0.1s.gif',
           'f/frame_33_delay-0.1s.gif',
           'f/frame_34_delay-0.1s.gif',
           'f/frame_35_delay-0.1s.gif',
           'f/frame_36_delay-0.1s.gif',
           'f/frame_37_delay-0.1s.gif',
           'f/frame_38_delay-0.1s.gif',
           'f/frame_39_delay-0.1s.gif',
           'f/frame_40_delay-0.1s.gif',
           'f/frame_41_delay-0.1s.gif',
           'f/frame_42_delay-0.1s.gif',
           'f/frame_43_delay-0.1s.gif'
       ],
       image_counter = 0;

   setInterval(function () {
       if (document.querySelector("link[rel='icon']") !== null)
           document.querySelector("link[rel='icon']").remove();
       if (document.querySelector("link[rel='shortcut icon']") !== null)
           document.querySelector("link[rel='shortcut icon']").remove();

       document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

       if (image_counter == favicon_images.length - 1)
           image_counter = 0;
       else
           image_counter++;
   }, 100);
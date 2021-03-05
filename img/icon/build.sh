src=src;
out=out;
ibg=none;
sbg=none;

echo 'Generating...';
cp $src/safari.svg $out/safari.svg;
convert -resize 110x110 -background $ibg -gravity center $src/icon.svg $out/img-src.png;
convert -define icon:auto-resize=64,48,32,16 -background $ibg -gravity center $src/icon.svg $out/favicon.ico;

convert -resize 16x16 -background $ibg -gravity center -extent 16x16 $src/icon.svg $out/icon-16x16.png;
convert -resize 32x32 -background $ibg -gravity center -extent 32x32 $src/icon.svg $out/icon-32x32.png;
convert -resize 48x48 -background $ibg -gravity center -extent 48x48 $src/icon.svg $out/icon-48x48.png;
convert -resize 52x52 -background $ibg -gravity center -extent 52x52 $src/icon.svg $out/icon-52x52.png;
convert -resize 72x72 -background $ibg -gravity center -extent 72x72 $src/icon.svg $out/icon-72x72.png;
convert -resize 96x96 -background $ibg -gravity center -extent 96x96 $src/icon.svg $out/icon-96x96.png;
convert -resize 76x76 -background $ibg -gravity center -extent 76x76 $src/icon.svg $out/icon-76x76.png;
convert -resize 120x120 -background $ibg -gravity center -extent 120x120 $src/icon.svg $out/icon-120x120.png;
convert -resize 128x128 -background $ibg -gravity center -extent 128x128 $src/icon.svg $out/icon-128x128.png;
convert -resize 152x152 -background $ibg -gravity center -extent 152x152 $src/icon.svg $out/icon-152x152.png;
convert -resize 167x167 -background $ibg -gravity center -extent 167x167 $src/icon.svg $out/icon-167x167.png;
convert -resize 180x180 -background $ibg -gravity center -extent 180x180 $src/icon.svg $out/icon-180x180.png;
convert -resize 192x192 -background $ibg -gravity center -extent 192x192 $src/icon.svg $out/icon-192x192.png;
convert -resize 256x256 -background $ibg -gravity center -extent 256x256 $src/icon.svg $out/icon-256x256.png;
convert -resize 320x480 -background $ibg -gravity center -extent 320x480 $src/icon.svg $out/icon-320x480.png;
convert -resize 384x384 -background $ibg -gravity center -extent 384x384 $src/icon.svg $out/icon-384x384.png;
convert -resize 512x512 -background $ibg -gravity center -extent 512x512 $src/icon.svg $out/icon-512x512.png;

convert -resize 70x70 -background $ibg -gravity center -extent 70x70 $src/mstile.svg $out/mstile-70x70.png;
convert -resize 270x270 -background $ibg -gravity center -extent 270x270 $src/mstile.svg $out/mstile-270x270.png;
convert -resize 310x310 -background $ibg -gravity center -extent 310x310 $src/mstile.svg $out/mstile-310x310.png;
convert -resize 310x150 -background $ibg -gravity center -extent 310x150 $src/mstile.svg $out/mstile-310x150.png;

echo 'Done!';

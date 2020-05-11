SCSS Textures
=============

I often use [CSS textures](https://leaverou.github.io/css3patterns/#) to do early prototypes, but I usually wind up hand altering them. Also I tend to use SCSS as a project matures, so I figured I'd macro-ize all the textures I use.

That's what this is, just include the file in your existing SCSS workflow, and go to town.

It's as simple as

    npm install --save scss-textures

then in your source file

    @import 'node_modules/scss-textures/textures.scss';

Then call some mixins and you are done

No Argument Mixins
------------------

These macros do not take any configuration:

- rainbow_burst_background() ([Demo](https://khrome.github.io/scss-textures/#/rainbow_burst))
- ash_background() ([Demo](https://khrome.github.io/scss-textures/#/ash))
- mahogony_background() ([Demo](https://khrome.github.io/scss-textures/#/mahogony))
- cherry_background() ([Demo](https://khrome.github.io/scss-textures/#/cherry))
- ebony_background() ([Demo](https://khrome.github.io/scss-textures/#/ebony))

The Helper Mixins
--------------

There are some helper mixins that are used to make others:

- wood_ish($color, $thickness, $opacity, $appendGrad, $appendSizes)
- cubes_background($colorA, $colorB, $colorC, $size)

Standard Mixins
---------------
The vast majority of the mixins take foreground, background and a scaling factor:

- biohazard_background($color, $background, $size)
- spotty_background($color, $background, $size) ([Demo](https://khrome.github.io/scss-textures/#/spotty))
- wavey_background($color, $background, $size) ([Demo](https://khrome.github.io/scss-textures/#/wavey))
- big_waves_background($color, $background, $size) ([Demo](https://khrome.github.io/scss-textures/#/big_waves))
- loose_plaid_background($color, $background, $size) ([Demo](https://khrome.github.io/scss-textures/#/loose_plaid))
- tight_plaid_background($color, $background, $size) ([Demo](https://khrome.github.io/scss-textures/#/tight_plaid))
- diamond_background($color, $background, $size) ([Demo](https://khrome.github.io/scss-textures/#/diamond))
- blueprint_background($color, $background, $size) ([Demo](https://khrome.github.io/scss-textures/#/blueprint))
- woody_background($color, $background, $size)
- aquatic_background($color, $background, $size) ([Demo](https://khrome.github.io/scss-textures/#/aquatic))
- spirals_background($color, $background, $scale) ([Demo](https://khrome.github.io/scss-textures/#/spirals))
- radial_halftone_background($color, $background, $size) ([Demo](https://khrome.github.io/scss-textures/#/radial_halftone))
- couch_background($background, $color, $size) ([Demo](https://khrome.github.io/scss-textures/#/couch))
- triangle_background($color, $background, $size) ([Demo](https://khrome.github.io/scss-textures/#/triangle))
- argyle_background($color, $lineColor, $size)
- arches_background($color, $background, $size) ([Demo](https://khrome.github.io/scss-textures/#/arches))
- hex_background($color, $background, $size)
- sloped_background($color, $background, $size)
- zigzag_background($color, $background, $size)
- dotted_background($color, $background, $size)
- starry_background($color, $background, $size)

But some take just a color and a scaling factor:

- spikey_background($color, $size) ([Demo](https://khrome.github.io/scss-textures/#/spikey))
- vertical_stripes_background($color, $size) ([Demo](https://khrome.github.io/scss-textures/#/vertical_stripes))
- weave_background($color, $size) ([Demo](https://khrome.github.io/scss-textures/#/weave))
- tartan_background($color, $size) ([Demo](https://khrome.github.io/scss-textures/#/tartan))
- cubes_up_background($color, $size)
- cubes_down_background($color, $size)


Testing
-------
TBD

Enjoy,

-Abbey Hawk Sparrow

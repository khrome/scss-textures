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

- rainbow_burst_background()
- ash_background()
- mahogony_background()
- cherry_background()
- ebony_background()

The Wood Mixin
--------------

The wood macro is a special case generator to make semi-realistic wood textures using a single div and two pseudoelements.

- wood_ish($color, $thickness, $opacity, $appendGrad, $appendSizes)

Standard Mixins
---------------
The vast majority of the mixins take foreground, background and a scaling factor:

- spikey_background($color, $size)
- biohazard_background($color, $background, $size)
- spotty_background($color, $background, $size)
- wavey_background($color, $background, $size)
- big_waves_background($color, $background, $size)
- loose_plaid_background($color, $background, $size)
- tight_plaid_background($color, $background, $size)
- diamond_background($color, $background, $size)
- blueprint_background($color, $background, $size)
- woody_background($color, $background, $size)
- aquatic_background($color, $background, $size)
- spirals_background($color, $background, $scale)
- animated_radial_halftone_background($color, $background, $size)
- radial_halftone_background($color, $background, $size)
- couch_background($background, $color, $size)
- triangle_background($color, $background, $size)
- argyle_background($color, $lineColor, $size)
- arches_background($color, $background, $size)
- vertical_stripes_background($color, $size)
- weave_background($color, $size)
- tartan_background($color, $size)
- hex_background($color, $background, $size)
- sloped_background($color, $background, $size)
- cubes_background($colorA, $colorB, $colorC, $size)
- cubes_up_background($color, $size)
- cubes_down_background($color, $size)
- zigzag_background($color, $background, $size)
- dotted_background($color, $background, $size)
- starry_background($color, $background, $size)


Testing
-------
TBD

Enjoy,

-Abbey Hawk Sparrow

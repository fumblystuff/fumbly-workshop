---
title: Getting Chamfers Right
description: Shares my first experiences using a Chamfer bit on my router plus some tricks I learned since then.
date: 2026-08-19
isReview: false
isTutorial: false
categories:
  - Router
timestamp: 2026-08-19T11:53:25.923Z
---

I discovered the router chamfer bit a while back when I wanted to make a box with a more interesting joint. I knew how to make squared-off corners using a biscuit jointer or pocket screws, but I wanted something that hid the cut edges of the box sides. I wanted clean corners so that if I stained the wood, you wouldn't see a different shade of the stain on the end cuts (across the grain).

<div class="text-image">
<div>
<p>Here's the first project I built using this type of joint. In this case, the box joints are on the front and back of the box, but I've also built drawers that use a chamfered joint in the drawer corners.</p>
<p>You can learn more about that project in my <a href="https://johnwargo.com/posts/2025/usb-3.0-cable-power-switch/" target="_blank">USB 3.0 Cable Power Switch</a> project.</p>
</div>
<div>
<div>
<img src="/images/2026/chamfering/wooden-box.jpg" alt="An image of a partially assembled box with chamfered corners" class="image fit">
{% imageCaption "wooden-box" "A chamfered box" %}
</div>
</div>
</div>

<div class="text-image">
<div>
<p>Here's an example of a router chamfer bit. Chamfer bits have cutting edges (this one has two, others may have more) set to a specific angle; in this case, the example cuts a 45 &deg; angle. You can use it on a router or router table.</p>
</div>
<div>
<div>
<img src="/images/2026/chamfering/image-00.jpg" alt="An image of a chamfer bit" class="image fit">
{% imageCaption "image-00" "The chamfer bit" %}
</div>
</div>
</div>

When I first discovered the chamfer bit, I was confused by how I'd use this to make the full width cuts shown in {% imageReference "wooden-box" %}. I couldn't figure out how I could make that cut using the bearing at the top of the bit to guide the bit against the wood when I wanted to cut the board flush to the top of the board.

I could have taped another board on top of the board being cut, and used the top board to guide the router bit while it cut the board underneath, but I knew that would give me trouble. 

It turns out that you can use the chamfer bit two different ways, depending on the type of cut you're making. I'll describe these approaches in later sections of this post. For now, lets talk about how much material to cut in each pass using a chamfer bit.

## How Much Material to Cut?

When I first started using the my router to cut a profile on a piece of wood, I would set the router bit and fence to make the whole cut in a single pass. That worked, but boy was it a nightmare; its hard to push the piece being cut against the router bit when its slicing so much material. If you push the board too fast, it wears out the blade, if you push it too slow, it burns the wood after the bit heats up. 

The better approach is to cut away material in small slices. In my [Making Thinner Slices on the Router Table](/posts/2026/router-table-thinner-slices/){target="_blank"} post, I show an easy way to setup most any router bit to make multiple passes (taking thinner slices from the material) but the process is slightly time consuming. 

With chamfer bits, its even easier.

All you need to do is start with the top of the chamfer bit low on the router table or close to the router base plate then make multiple passes with the wood against the router bit. Between each pass, simply raise the router bit top from the router table or base plate. The amount of bit you expose with each height increase determines the amount of material cut from the wood.

{% sidebar "Cut depth varies based on the type of wood" %}
The amount of material you cut with each pass should also be determined based on the type of wood passing past the router bit. With softer wood, you can cut more material per pass. For harder woods, you'll find you have an easier experience taking smaller (thinner) cuts per pass.
{% endsidebar %}

This isn't as fast as doing the cut in one pass, but, since patience is one of the most important skills of a woodworker, this approach reinforces or exercises that skill.

## Making Chamfered Cuts

Now lets talk about how to make those cuts. I mentioned earlier that there were two approaches you can use when using a chamfer bit and the approach you use depends on what type of cut you're making.

### Partial Chamfer

Sometimes you don't want to make the chamfer cut from the bottom of the board all the way to the top. I call this approach a **partial chamfer** cut. With this approach, you'll leave a portion of the material in place at the top of the board being cut.

<div class="text-image">
<div>
<p>To make this cut, start with the chamfer bit setup close to the router table surface or router base plate. You'll use the bearing at the top of the bit as a guide to keep the bit from cutting too deep into the material as shown in the following image.</p>
<p>Start with a small slice, then make multiple passes, raising the bit a little bit between each pass. When you've cut enough material away, you're done.</p>
</div>
<div>
<div>
<img src="/images/2026/chamfering/image-01.jpg" alt="Caption Text" class="image fit">
{% imageCaption "image-01" "" %}
</div>
</div>
</div>

**Note:** Remember, you can't use this approach to cut a chamfer across the entire thickness of the wood. This only works when you leave at least a sliver of material at the top of the board for the bearing to roll against.

When using a router table, use your router table's pivot pin to make it easier (and safer) to start the cut against the wood.

### Full Chamfer

A **full chamfer** cut is when you make the cut across the entire surface of the board, like the corners in {% imageReference "wooden-box" %}. 

To make this cut, you use the bearing as a reference for the router fence, but the bearing itself isn't involved in guiding the cut.  I'll explain this in a minute.

<div class="text-image">
<div>
<p>Start by setting the router table fence gap wide enough so the chamfer bit doesn't cut into the fence when you turn on the router.</p>
<p>Next, use a straight edge ruler to align the fence with the bearing at the top of the chamfer bit. With this in place, as you push the material past the chamfer bit, the fence keeps the material in a consistent position against the bit - especially if you raise the bit so the bearing is higher than the material.</p>
</div>
<div>
<div>
<img src="/images/2026/chamfering/image-02.jpg" alt="An image of a router table fence and straight edge ruler" class="image fit">
{% imageCaption "image-02" "Aligning the Router Table Fence" %}
</div>
</div>
</div>

<div class="text-image">
<div>
<p>Once you're all setup, you follow the same steps as the other approach, making multiple passes against the bit slicing a small amount of material as you go.</p>
<p>Once you raise the bit so the bearing is above the top of the material being cut, the fence holds everything in place so you can cut all the way to the top of the board.</p>
</div>
<div>
<div>
<img src="/images/2026/chamfering/image-03.jpg" alt="an image of the router fence setup from a different angle" class="image fit">
{% imageCaption "image-03" "Cutting Slices Against the Fence" %}
</div>
</div>
</div>

There are a few scenarios where you could mess up the cut. For example, if the chamfer bit hits a knot in the wood and kicks out, if the material being cut doesn't stay flat against the router table or base plate, or the material somehow pulls away from the fence.

<div class="text-image">
<div>
<p>To help protect from these scenarios, I keep a set of the <a href="https://jessem.com/products/clear-cut-stock-guides" target="_blank">JessEm Clear-Cut Stock Guides</a> in my shop. I use them whenever I'm making a big cut on the router or working a persnickety piece of wood.</p>
</div>
<div>
<div>
<img src="/images/2026/chamfering/image-04.jpg" alt="JessEm Clear-Cut Stock Guides" class="image fit">
{% imageCaption "image-04" "JessEm Clear-Cut Stock Guides" %}
</div>
</div>
</div>

<div class="text-image">
<div>
<p>The stock guides mount on either side of the router table fence and they restrict movement of the material being cut in several dimensions.</p>
<p>First, I set the roller on top of the wood (on both sides of the fence) then tighten it in position. This keeps the board flat against the table.</p>
<p>Second, the rollers only move in one direction. With the stock guide in place, the material being cut can only move from right to left.</p>
</div>
<div>
<div>
<img src="/images/2026/chamfering/image-05.jpg" alt="Router Fence Setup" class="image fit">
{% imageCaption "image-05" "Router Fence Setup" %}
</div>
</div>
</div>

<div class="text-image">
<div>
<p>All you have to do is hold the board firmly against the fence as you push it from right to left past the chamfer bit.</p>
</div>
<div>
<div>
<img src="/images/2026/chamfering/image-06.jpg" alt="Caption Text" class="image fit">
{% imageCaption "image-06" "Caption Text" %}
</div>
</div>
</div>

## Conclusion

I hope you found this article interesting and helpful. With the information I provided here, you should be able to cut full or partial chamfers using a router table or router (partial chamfers only).
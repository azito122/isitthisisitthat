## Is It This Is It That

Just playing around with an idea in the early stages.

I was inspired by trying to code a Twenty Questions game from scratch. While doing so, I realized that the most difficult part of the process was going to be finding/generating data on the various entities and their properties. I already had a script that would allow the computer to ask a few questions, each one linked to a specific property, and narrow down the list of possible answers based on the user's response.

This required not only a list of questions, each on with a corresponding property, but also a list of nouns/entities, each with a list of many properties that they possessed. It was this list that drew my attention. In all modesty, my script worked fairly well -- if the user answered honestly, and restricted themselves to choosing on of the handful of nouns I had added the data for, it would guess right most of the time. Of course I have no doubt that there is far more involved in a full-scale electronic Twenty Questions game -- for example, ensuring that it would be able to narrow down the list efficiently enough to get the answer within 20 questions.

But what interests me is how to build the database of entities and their properties. How to teach the computer that cows are animals and also larger than a breadbox. I looked around to see if there were any databases already existing of this kind, but was unsuccessful. This is NOT to say that there are no such databases -- but the difficulty of locating one made me want to build a tool that would be like a crowd-sourced way to CREATE such a database.

The idea is that the user would be presented with an image, say of a chimpanzee, and given around three properties, say, animal, furry, and commonly eaten. They would select the properties that apply and then tap/click the image to indicate that they were done. If you were able to pull in enough users to such a site, you might be able to establish a large database of entity/property mappings, and draw from it probabilistic data -- for example, a chimpanzee might be 99% likely to be an animal (or rather, 99% of users said it was an animal, out of the times 'animal' was paired with 'chimpanzee').

I have no idea how far I will get on this project, nor do I make any claims as to its usefulness. It's really just a fun experiment for my own enjoyment.

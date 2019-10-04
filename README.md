# Calendar

## Introduction

This app is created as an assessment for a potential job. It contains a fictive calendar
component. The time limit of the app is four hours. The app doesn't have to be
done after the four hours are over.

Because I really wanted to showcase all different aspects of creating an app
(logic, state, styling, cleaning etc.) I pushed as hard as I could to
finish the app.

## Steps

- Model the recuirements.
- Create basic logic for this fictive calendar
- Implement the logic in the components
- Cleanup

## After

Oke.. I did finish.. but just barely. I didn't test all capabilities of the
app. And I believe their is still a bug in my calculation on the game logic.
Also the styling could be done much better.

Atleast I've created something to talk about.

## Reflection

### Final thoughts

After some food, some relaxion and some sleep, I can't help feeling terrible
about the app. I so much want to be an expert developer. And creating an app
like this remindes me how unexperienced I really am. Being this for a job
assesment, and on a time limit, makes this experience different from when I'm
solving a hard programming puzzle. I simply did not had enough time to give my
decissions much thought and research. The only criteria making a decission was:
'can I make it to work without much trouble'.

Let's try and have some possitive thoughts about it. I did complete all the
steps planned in the given time. And I got some things to work in the
app. For a junior developer, with only twenty hours of React experience five
months ago, not that bad. I have given the company an honest picture about me, who
I am and what I'm capable of. Being a company with so much experienced
developers, it's only normal the app isn't by their standards. Try hard, and fail
hard, is exactly what I did. And I should be proud.

### Choices

Although I didn't spend much time using React, I enjoyed every bit of it. Hence
I've chosen to write this app in React. The framework always felt pretty natural,  
so I assumed it wouldn't give me that much trouble picking it up again.

What I liked most about working with React in the past, is its way of writing
functional components. It makes really clean syntax. The downside though is
that these components are stateless, and you have to store state somewhere in
the app.

In the past I used Redux for storing state. Back then I found it pretty hard to
set up right, and I spend a great deal of time on it. Now there are things
called React Hooks for giving functional components some state. From a quick
overview in the docs, they have some familiarity with Redux. And other
things, like simple setting and getting state, are just much simpler to
accomplish. I choose to give it some try in this app. And I'm glad I did.

Creating the `Datetime` logic for this app, I decided to lean on my experience
with Exercism exercises. I know React would take me some time to pick up, so
the game logic had to be done in less. I started creating a simple class that
accomplished some of the things I needed for the logic of the app. In an
Exercism exercise I spend a great deal of time creating the most elegant
solution. But in this app, the solution had to be quick and dirty.

### Unfinished

There is still something wrong in my calculations in the `Datetime` class. I
left it as is, knowing the Datetime would at least give me some form of a month
array to work with. I saved this bug for last, but didn't finish in time to
review it.

For the input field I wanted to create a parser. This would have bin a really
simple parser, just splitting the given string at `-` or `/` and trying to
create a date from it. One problem would have bin the `Datetime` class having
default values for month, year etc. So it can create a date even if those
arguments are not filled, resulting in a state change, resulting in a filled
input box (an inputbox you are just typing in). Maybe this could be overcome by
making the change a onBlur event. Just thoughts, I didn't try any of it.

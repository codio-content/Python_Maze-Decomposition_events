We are now going to create our first **event handler**. This is the code that runs when an event is **fired**.

## The Collision Event
As soon as the player collides with any other object, our event handler will be called and our code will run.

In this simple case, we want to 

- Play a bump sound whenever the player collides with any other game entity.
- Display a message 'You have bumped into something' below the game.

Look at the code on the left. Please don't worry about the first line of code...

```python
def collisionEvent():
```

It looks nasty, but it will soon make perfect sense. Just read the `collisionEvent()` bit and think "this is the bit of code that runs when there is a collision". It is important that all your collision code be indented 2 spaces, so that Python knows it belongs to `collisionEvent()`. The importance of indentation will be covered in future units.

Play the game and you can hear the sound and see the message.
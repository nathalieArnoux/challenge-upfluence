# challenge-upfluence

## Content implemented

1. Connection to SSE stream
2. Receiving posts and storing useful data for every received post
3. Punchcard-like grid system to display messages per day and hour
4. Counter (dynamic) to visualize total of posts received
5. Simple header and footer

## Difficulties encountered

### 1 - SSE

#### 1 - What is it

I've never used SSE streams before so I had to research it.
Seems similar to Websockets, but uni-directionel (server-sent) when WS are bi-directional.

#### 2 - How to read the data

I needed to understand the form of the data sent so I copied an example taken from the stream:

    data: {"youtube_video":{"id":138486971,"name":"Becoming Super Saiyan ðŸ˜‚ #cat #explore #meme #shorts","description":"","link":"https://www.youtube.com/watch?v=aSnmxMw8bGw","views":31,"comments":0,"likes":1,"dislikes":0,"timestamp":1713383491,"post_id":"aSnmxMw8bGw"}}

#### 3 - EventStream tab

> Network > click on "stream" line > EventStream

Discovered this convenient tab that lets me see the messages received live from the server.

#### 4 - How to connect to the stream

With the EventSource class (https://developer.mozilla.org/en-US/docs/Web/API/EventSource)

New object (OOP?) with SSE URL as parameter

    new EventSource("https://stream.upfluence.co/stream")

#### 5 - Treat the data

Object.entries(obj) => returns array of property-value pairs, used to store type on one hand and details on the other, gives easier access to details.

Object.entries(obj)[0] => why [0]? because it's already considered an array here.

### 2 - Punch card

A lot of grid and flex but the result looks ok.

### 3 - How to organize the code

Struggled with how to structure the code so it's not too hard to read.

## Things to add later

- button to connect / disconnect to SSE stream.
- french week format: starting by monday instead of sunday. Or option to toggle.

# challenge-upfluence

## Content implemented

## Difficulties encountered

### 1 - SSE

#### What it is

I've never used SSE streams before so I had to research it.
Seems similar to Websockets, but uni-directionel (server-sent) when WS are bi-directional.

#### How to read the data

I needed to undertsand the form of the data sent so I copied an example taken from the stream:

    data: {"youtube_video":{"id":138486971,"name":"Becoming Super Saiyan ðŸ˜‚ #cat #explore #meme #shorts","description":"","link":"https://www.youtube.com/watch?v=aSnmxMw8bGw","views":31,"comments":0,"likes":1,"dislikes":0,"timestamp":1713383491,"post_id":"aSnmxMw8bGw"}}

#### How to connect to the stream

With the EventSource class (https://developer.mozilla.org/en-US/docs/Web/API/EventSource)

New object (OOP?) with SSE URL as parameter

    new EventSource("https://stream.upfluence.co/stream")

## Things to add later

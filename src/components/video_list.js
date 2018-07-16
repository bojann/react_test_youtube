import React from 'react';
import {Media, Grid, Row, Col, ListGroupItem, ListGroup} from 'react-bootstrap/lib';

const VideoList = ({videoList}) => {
  let videoListView = videoList.map( (video) => {
    let item = video.snippet;
console.log(video);
    return (
        <ListGroupItem key={video.etag}>
          <Media>
            <Media.Left>
              <img width={120} height={90} src={item.thumbnails.default.url} alt="thumbnail" />
            </Media.Left>
            <Media.Body>
              <Media.Heading>{item.title}</Media.Heading>
              <p>{item.description}</p>
            </Media.Body>
          </Media>
        </ListGroupItem>
    )
  })

  return (
    <Col xs={8} md={10} mdOffset={1}>
      <ListGroup>
          {videoListView}
      </ListGroup>
    </Col>
  )
}

export default VideoList;

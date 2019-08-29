import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  a {
    color: ${props => props.theme.darkAccent};
  }
`;

const ReviewItem = () => (
  <div className="column">
    <Card className="card">
      <div className="card-content">
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            condimentum laoreet lectus, et efficitur sapien. Maecenas porttitor
            interdum mattis. Sed risus justo, euismod id vehicula in,
            pellentesque in turpis. Vestibulum semper, turpis sed commodo
            molestie, nisi urna facilisis eros, vitae eleifend elit odio eu ex.
            Vestibulum rutrum nulla purus, ac vehicula nulla iaculis non.
          </p>
        </div>
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                className="is-rounded"
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default ReviewItem;

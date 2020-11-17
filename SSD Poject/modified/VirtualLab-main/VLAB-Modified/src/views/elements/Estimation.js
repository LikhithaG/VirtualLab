import React, { Component } from "react";

class Estimation extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Estimation</h1>
        <p>
          In sofware devlopment, an estimate consists of a quantified evaluation
          of the effort which is necessary to carry out a given development
          task; this is most often expressed in terms of duration. Here, we
          aggregrate many individual estimates , so as to obtain of the overall
          duration, efoort and cost of a software project.
        </p>
        <br></br>
        <h1>Terminology</h1>
        <br></br>
        <h3>Concensus</h3>
        <p>
          It is a creative and dynamic way of reaching agreement between all
          members of a group. Instead of simply voting for an item and having
          the majority of the group getting their way, a group using consensus
          is committed to finding solutions that everyone actively supports, or
          at least can live with.
        </p>
        <br></br>
        <h3>Product Backlog</h3>
        <p>
          It is a container for work you think you will do in the future to keep
          your product competitive. It is the output of the product owner in
          collaboration with stakeholders (customers, the team, analysts). It
          will change frequently, with items being added or taken out on a
          regular basis. It will be larger than the sprint backlog, generally.
          It will also have items with a mix of granularity; with fewer items
          broken down below the user story level. It is overseen by the product
          owner.
        </p>
        <br></br>
        <h3>Story Point</h3>
        <p>
          Story points are a unit of measure for expressing an estimate of the
          overall effort that will be required to fully implement a product
          backlog item or any other piece of work. It is affected by -
        </p>
        <ul>
          <li>The complexity of the work </li>
          <li>The amount of work to do </li>
          <li>Any risk or uncertainty in doing the work </li>
        </ul>
      </div>
    );
  }
}

export default Estimation;

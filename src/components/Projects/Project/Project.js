import React from "react";

const Project = (props) => {

  return (
		<div className="container">
			<h3><strong>Title: </strong> {props.title}</h3>
			<h5><strong>Desciption:</strong> {props.description}</h5>
			<h5><strong>Language Used:</strong> {props.language}</h5>
			<h5><strong>Created:</strong> {props.createdAt}</h5>
			<h5><strong>Repo URL:</strong> <a target="_blank" rel="noopener noreferrer" href={props.url} style={{ textDecoration: 'None' }} > {props.url}</a></h5>
			<hr className="star-portfolio" />
		</div>
  );
};

export default Project;

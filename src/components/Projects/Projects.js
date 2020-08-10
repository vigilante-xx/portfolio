import React, { useState, useEffect } from 'react'
import Project from './Project/Project';
import axios from 'axios';
import './Projects.css';

const Projects = () => {

	const [repos, setRepos] = useState([])

	useEffect(() => {
		axios.get("https://api.github.com/users/KhushJain/repos")
			.then((res) => {
				res.data.sort((a,b) => ( new Date(b.updated_at) - new Date(a.updated_at) ));
				setRepos(res.data);
			})
			.catch(error => {
				console.log(error);
			})
	}, []);

	return (
		<div className="container-fluid portfolio-container-holder content-section portfolio" id="portfolio">
      <div className="portfolio-container container">
        <h1 className="text-center">My Projects (Getting it from GitHub API)</h1>
        <hr className="star-portfolio" />
        <div className="row">
					{repos.length !== 0 
						? 
						repos.map((val, id) => (
							<Project key={id} title={val.name} description={val.description} language={val.language} createdAt={val.created_at} url={val.html_url} />
						))
						: 
						<h1 style={{ textAlign: "center" }}>Loading...</h1>
					}
        </div>
      </div>
    </div>
	)
}

export default Projects;

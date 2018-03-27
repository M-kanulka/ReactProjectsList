import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let ProjectItems;
    if(this.props.projects){
      ProjectItems = this.props.projects.map (project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project ={project} />
        );
      });

    }
    // console.log(this.props);
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {ProjectItems}

      </div>
    );
  }
}

// Projects.propTypes = {
//   projects: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// }

export default Projects;

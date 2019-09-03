import React from 'react';
import { Media } from 'react-bootstrap';

class Article extends React.Component {

    render() {
        console.log(this.props);
        return (
            <Media key={this.props.singleArticle.id}>
                <Media.Body>
                    <h5> {this.props.singleArticle.titleOfArticle} </h5>
                    <p> {this.props.singleArticle.descOfArticle} </p>
                </Media.Body>
            </Media>
        );
    }
}

export default Article;
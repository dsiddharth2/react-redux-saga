import React from 'react';
import Article from '../article/Article';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        allArticles : state.articles
    };
}

class DisplayArticle extends React.Component {
    
    render() {
        return(
            <div>
                <h4> Articles </h4>
                <ul className="list-unstyled">
                    {
                        this.props.allArticles.map(el => (
                            <Article key={el.id} singleArticle = {el} />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(DisplayArticle);
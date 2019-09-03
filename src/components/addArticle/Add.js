import React from 'react';
import { Form, Button } from 'react-bootstrap';
import uuidv1 from "uuid";
import { connect } from "react-redux";

import { addArticle } from '../../actions/index';

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            titleOfArticle: "",
            descOfArticle: "",
            id: ""
        };
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            titleOfArticle : event.target.value
        });
    }

    handleOnChangeDesc = (event) => {
        this.setState({
            descOfArticle : event.target.value
        });
    }

    handleOnClick = () => {
        const { titleOfArticle, descOfArticle } = this.state;
        const id = uuidv1();
        this.setState({ 
            titleOfArticle: '', 
            descOfArticle: '', 
            id: '' 
        });
        this.props.addArticle({ titleOfArticle, id, descOfArticle});
    }

    render() {
        return(
            <div>
                <h4> Add Article </h4>
                <Form>
                    <Form.Group controlId="articleTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" onChange={this.handleOnChangeTitle} />
                    </Form.Group>
                    <Form.Group controlId="articleDescrition">
                        <Form.Label>Full Descrition</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.handleOnChangeDesc} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.handleOnClick}>
                        Save Article
                    </Button>
                </Form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
  }

export default connect(null, mapDispatchToProps)(Add);
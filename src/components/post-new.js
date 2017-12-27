import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component{

    renderField(field){
        return (
            <div className='form-group'>
                <label>{field.label}</label>
                <input className='form-control' {...field.input} type='text'/>
                {field.meta.error}
            </div>
        );
    }
   
    render(){
        return (
            <form>
                <Field 
                    name='title' 
                    label='Title'
                    component={this.renderField} 
                />
                <Field 
                    name='categories' 
                    label='Categories'                    
                    component={this.renderField} 
                />
                <Field 
                    name='content' 
                    label='Post content'                    
                    component={this.renderField} 
                />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        );
    }
}
function validate(values){
    const errors = {}
    if(!values.title){
        errors.title = 'Please, enter a title';
    }
    if(!values.categories){
        errors.categories = 'Please, enter some categories';
    }
    if(!values.content){
        errors.content = 'Please, enter some content';
    }
    return errors;
}
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostNew);
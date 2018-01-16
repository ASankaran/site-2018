import React, { Component } from 'react'
import { Grid, TextArea, Form} from 'semantic-ui-react';
import styles from './registerEssay.scss'

import RegisterButtons from '../registerButtons/registerButtons';

export default class RegisterEssay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      essay: '',
    };
  };

  componentWillMount() {
    this.setState({ essay: this.props.data });
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value});
  };

  validateStep = () => {
    const essay     = this.state.essay;
    const nextStep  = this.props.nextStep;

    nextStep(essay);
  };

  render() {
    const previousStep  = this.props.previousStep;
    const validateStep  = this.validateStep;
    const handleChange  = this.handleChange;
    const essay         = this.state.essay;

    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column className="centerContainer" mobile={14} computer={10} textAlign='left' verticalAlign='middle'>
            <Grid.Row className='essayMessage'>
              Here’s some space to add some optional content to your application. Feel free to use one or more of the prompts below or write anything else you believe can be valuable to your application.
              <br/>
              <ul>
                <li>Projects that you’ve worked on outside of classes, work, hackathons - effort</li>
                <li>Contributing to an idea that was not your own - teamwork</li>
                <li>What about open source appeals to you - interest in open source</li>
              </ul>
            </Grid.Row>
            <Grid.Row className='essayTextArea'>
              <Form>
                <TextArea onChange={handleChange} value={essay} name='essay' autoHeight placeholder='Write to your heart’s content.' style={{ minHeight: '15em' }} />
              </Form>
            </Grid.Row>

          </Grid.Column>
        </Grid.Row>
        <RegisterButtons nextTitle='SUBMIT' previousStep={() => previousStep(essay)} nextStep={validateStep} />
      </Grid>
    )
  }
}

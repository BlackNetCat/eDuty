import React from 'react';
import { EdutyServiceConsumer } from '../eduty-service-context';

const withEdutyService = () => (Wrapped) => {

  return (props) => {
    return (
      <EdutyServiceConsumer>
        {
          (edutyService) => {
            return (<Wrapped {...props}
                     edutyService={edutyService}/>);
          }
        }
      </EdutyServiceConsumer>
    );
  }
};

export default withEdutyService;
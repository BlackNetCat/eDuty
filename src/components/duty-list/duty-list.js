import React, { Component } from 'react';
import DutyListItem from '../duty-list-item';
import { connect } from 'react-redux';
import { withEdutyService } from '../hoc';
import { dutiesLoaded } from '../../actions';
import { compose } from '../../utils';
import './duty-list.css';

class DutyList extends Component {

componentDidMount() {
    const { edutyService } = this.props;
    const data = edutyService.getDuties();
    console.log(data);
    this.props.dutiesLoaded(data);
}

render() {
    const {duties} = this.props;
    return (
        <ul className="duty-list">
            {
                duties.map((duty) => {
                    return (
                        <li key={duty.id}><DutyListItem duty={duty}/></li>
                    )
                })
            }
            
        </ul>
    );
}

}

const mapStateToProps = ({ duties}) => {
    return { duties }
}; 

const mapDispatchToProps = {    
        dutiesLoaded    
};

export default compose (
    withEdutyService(),
    connect(mapStateToProps, mapDispatchToProps)
)(DutyList);


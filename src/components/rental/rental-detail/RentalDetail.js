import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../action';

 class RentalDetail extends React.Component{
     componentWillMount(){
         const rentalId = this.props.match.params.id;
         this.props.dispatch(actions.fetchRentalById(rentalId));
     }
    render(){
        const rental = this.props.rental;
        return(
            <div>
                <h1>{rental.title}</h1>
                <h1>{rental.category}</h1>
                <h1>{rental.description}</h1>
                <h1>{rental.dailyRate}</h1>
            </div>
            
        )
    }
}
function mapStateToProps(state){
    return{
        rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetail)
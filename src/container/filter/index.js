import React from 'react';
import Checkbox from '../../components/checkbox';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter'


const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

class Filter extends React.Component {

    componentDidMount(){
        this.selectedCheckBoxes = new Set();
    }

    handleFilterSelection = (label) => {
        if(this.selectedCheckBoxes.has(label))
          this.selectedCheckBoxes.delete(label)
         else
         this.selectedCheckBoxes.add(label)

         this.props.updateFilter(Array.from(this.selectedCheckBoxes));
    }


    render() {

         const { classes } = this.props;
        return (
            <div className={classes.filterContainer}>
                {
                    
                    availableSizes.map(size => <Checkbox key={size} label={size} filterSelectionHandler={this.handleFilterSelection}/>)
                }
            </div>
        )

    }
}


export default withStyles(styles)(connect(null ,{
    updateFilter
})(Filter));
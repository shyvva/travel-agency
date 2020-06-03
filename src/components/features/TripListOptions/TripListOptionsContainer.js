import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeSearchDuration, addSearchByTags, removeSearchByTags} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeSearchDuration: (type, value) => dispatch(changeSearchDuration(type, value)),
  addSearchByTags: tag => dispatch(addSearchByTags(tag)),
  removeSearchByTags: tag => dispatch(removeSearchByTags(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);

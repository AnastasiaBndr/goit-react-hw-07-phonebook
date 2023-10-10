

import css from './Filter.module.css';

const Filter = () => {
    const handleFilterValue = (e) => {

    }

    return (<div className={css.filter_container}>
        <div><h3>Filter</h3>
            <input type="text" name="filter" onChange={handleFilterValue} />
        </div></div>)
}

export default Filter;
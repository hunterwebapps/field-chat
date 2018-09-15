import React from 'react'
import { func } from 'prop-types'

FilterBox.displayName = 'Filter Box'

FilterBox.propTypes = {
    filterChanged: func.isRequired
}

function FilterBox ({ filterChanged }) {
    const handleKeyDown = e => filterChanged(e.target.value)
    return (
        <input
            type="text"
            placeholder="Filter..."
            className="form-control"
            onKeyDown={handleKeyDown}
        />
    )
}

export default FilterBox

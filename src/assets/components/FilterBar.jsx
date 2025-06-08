const FilterBar = ({ pageState, filterChagers, View }) => {
    if (pageState == "photo") {
        return (
            <div className="photoFilters" style={{ gridColumn: "span 2" }}>
                <p className={View == "best" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={filterChagers.changeFilterBest}>Selects</p>
                <p className={View == "jacobs" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={filterChagers.changeFilterJacobs}>JSoM Assualt Investigation</p>
                <p className={View == "hocoParade" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={filterChagers.changeFilterHocoParade}>2022 IU homecoming Parade</p>
                <p className={View == "foodBank" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={filterChagers.changeFilterFoodBank}>Pantry 279</p>
                <p className={View == "roeProtest" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={filterChagers.changeFilterRoeProtest}>Protest for Abortion Rights</p>
            </div>
        )
    } else if (pageState == "design") {
        return (
            <div className="designFilters">
                <p className={View == "print" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={filterChagers.changeFilterPrint}>Print Layout</p>
                <p className={View == "web" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={filterChagers.changeFilterWeb}>Web Design</p>
            </div>
        )
    }

    return (
        <div className="designFilters">
            <p className={View == "print" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={filterChagers.changeFilterPrint}>Print Layout</p>
            <p className={View == "web" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={filterChagers.changeFilterWeb}>{pageState}</p>
        </div>
    )

}

export default FilterBar

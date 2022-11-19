import PropTypes from "prop-types";  

const Title = ({ title }) => {
    return(
        <div className="title">
            <h3>{ title }</h3>
        </div>
    )
}

Title.defaultProps = {
    title: "Task-Tracker"
}

Title.propTypes = {
    title: PropTypes.string
}

export default Title;
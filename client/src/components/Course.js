import {Link} from "react-router-dom"

function Course({course:{id,title}}){
    return(
        <Link to={`/courses/${id}`}>
            <div className="course-div">
                <p>
                    Title: {title}
                </p>
            </div>
        </Link>
    )
}

export default Course;
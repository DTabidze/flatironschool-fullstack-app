function Drop(){
    return(
        <div>
            <h1>
                Drop Course
            </h1>
            <form>
                <div>
                    <label for="title">Course Title:</label>
                    <input type="text" />
                </div>
                <div>
                    <label for="title">Student ID:</label>
                    <input type="text" />
                </div>
                <div>
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default Drop;
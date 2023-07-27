function Student({instructor:{id,fname,lname,profile_pic}}){
    return(
        <div>
            <p>
                First Name: {fname}
            </p>
            <p>
                Last Name: {lname}
            </p>
            <img src={profile_pic} alt={`${fname} ${lname}`} />
        </div>
    )
}
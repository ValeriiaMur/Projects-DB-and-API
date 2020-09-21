const db = require("./dbConfig");

module.exports = {
    find,
    add
}

function find(tbl, id){
    const query = db(tbl);

    if(id){
        return query
            .where("id", id)
            .first()
            .then(proj => {
                if(proj){
                    return proj;
                } else {
                    return null;
                }
            })
    } else {
        return query
        .then(projects => {
            return projects
        })
    }
}

function add(tbl, data){
    const query = db(tbl)

    return query
        .insert(data, 'id')
        .then(([id])=>{
            find(tbl, id)
        })
}


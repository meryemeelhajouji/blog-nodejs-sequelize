const { Commentaire } = require('../models/Commentaire')

exports.adminGetCommentById = async (req,res) => {
    const id = req.params.idComment
    const comment = await Commentaire.findByPk(id, {
        raw: true,
        nest: true
    })
    res.render('./admin/update-comment' ,{
        layout: 'admin',
        comment
    })
}

exports.adminUpdateComment = (req, res) => {
    const id = req.params.idComment
    const x = {
        username: req.body.commentAuthor,
        contenue: req.body.commentContent
    }
    Commentaire.update(x, {
        where: {id: id}
    })
        .then(data => {
            // res.send(x)
            res.redirect('/./admin/posts/details/'+req.body.articleId)
        })
        .catch(err => {
            res.send({
                message: 'something went wrong'
            })
        })
}

exports.createComment = (req, res, id) => {
    const comment = {
        username: req.body.username,
        contenue: req.body.contenue,
        articleId: req.params.idPost
    }
    Commentaire.create(comment)
        .then(data => {
            res.redirect('/'+comment.articleId)
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Something went wrong."
            })
        })
}

exports.getCommentsByPost = (id) => {
    return Commentaire.findAll({ 
        where:  {articleId: id},
        raw: true,
        nest: true
    })
}

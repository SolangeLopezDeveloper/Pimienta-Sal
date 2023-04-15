module.exports = {
    register: (req, res) => {
        return res.render('users/register',{
            title: "Registro"
        })
    },
    login: (req, res) => {
        return res.render('users/login',{
            title: "Login"
        })
    },
    profile: (req, res) => {
        return res.render('users/profile',{
            title : "Perfil"
        })
    },
}
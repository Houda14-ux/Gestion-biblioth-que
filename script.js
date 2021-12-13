function valider(titre, auteur, prix, date, langue, type) {

    if (titre.length > 30 || titre.length == 0) {
        alert("la longueur du titre doit êtes compris entre 1 et 30 caractaires");
        return false;
    }
    if (auteur.length > 30 || auteur.length == 0) {
        alert("la longueur du nom de l'auteur doit êtes compris entre 1 et 30 caractaires");
        return false;
    }
    let regexPrix = new RegExp(/^([0-9]+)([.]{1}[0-9]{0,2}){0,1}$/);

    console.log(prix);
    console.log(regexPrix);
    if (regexPrix.test(prix) == false) {
        alert("Prix invalide");
        return false;
    }
    let regexString = '([0-2][0-9]|3[0-1])' +
        '/' +
        '(0[1-9]|1[0-2])' +
        '/' +
        '([0-9]{4})';
    //var regex=new RegExp("([0-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/([0-9]{4})");
    let regex = new RegExp(regexString);

    let dateOk = regex.test(date);

    if (dateOk == false) {
        alert("Date invalide !");
        return false;
    }


    return true;
}

function ajouter() {
    let titre = document.getElementById('Titre').value;
    let auteur = document.getElementById('Auteur').value;
    let Prix = document.getElementById('Prix').value;
    let DateDePublication = document.getElementById('Datedepublication').value;
    let langue = document.getElementById('langue').value;
    let Type = document.querySelector('input[name="category"]:checked').value;

    let valid = valider(titre, auteur, Prix, DateDePublication, langue, Type);
    if (valid == true) {
        let tr = document.createElement('tr');//<tr></tr>
        let td_titre = document.createElement('td');//<td></td>
        let td_auteur = document.createElement('td');
        let td_Prix = document.createElement('td');
        let td_DateDePublication = document.createElement('td');
        let td_Langue = document.createElement('td');
        let td_Type = document.createElement('td');
        let td_sup = document.createElement('td');
        let td_mod = document.createElement('td');


        td_titre.textContent = titre;//<td>Secret </td>
        td_auteur.textContent = auteur;
        td_Prix.textContent = Prix;
        td_DateDePublication.textContent = DateDePublication;
        td_Langue.textContent = langue;
        td_Type.textContent = Type;
        td_sup.textContent = conteur;
        td_sup.classList.add('supprimer');
        td_sup.setAttribute('onclick', 'supprimer(' + conteur + ')');
        td_mod.classList.add('supprimer');
        td_mod.textContent = conteur;
        td_mod.setAttribute('onclick', 'modifier(' + conteur + ')');

        tr.id = conteur;//<tr id="1"></tr>
        tr.appendChild(td_titre);//<tr id="1"><td>Secret</td></tr>
        tr.appendChild(td_auteur);//<tr id="1"><td>Secret</td><td>Auteur</td></tr>
        tr.appendChild(td_Prix);
        tr.appendChild(td_DateDePublication);
        tr.appendChild(td_Langue);
        tr.appendChild(td_Type);
        tr.appendChild(td_mod);
        tr.appendChild(td_sup);

        let lignes = document.getElementById('lignes');
        lignes.appendChild(tr);//<tr id="1"><td>Secret</td>...</td></tr>
        //<tbody id="lignes">
        //<tr><td>Secret</td> <td>auteur</td> </tr>
        //</tbody>
        conteur++;
    }
}

let conteur = 0;
let id_modifier = null;
function supprimer(id) {
    let conf = confirm('voulez vous vraiment supprimer ?');
    if (conf == true) {
        tr = document.getElementById(id);
        let lignes = document.getElementById('lignes');
        lignes.removeChild(tr);
    }
}
function modifier(id) {
    document.getElementById('enregistre').disabled = false;
    document.getElementById('ajout').disabled = true;
    id_modifier = id;
    tr = document.getElementById(id);
    titre = tr.childNodes[0].innerHTML;
    document.getElementById('Titre').value = titre;
    auteur = tr.childNodes[1].innerHTML;
    document.getElementById('Auteur').value = auteur;
    Prix = tr.childNodes[2].innerHTML;
    document.getElementById('Prix').value = Prix;
    DateDePublication = tr.childNodes[3].innerHTML;
    document.getElementById('Datedepublication').value = DateDePublication;
    langue = tr.childNodes[4].innerHTML;
    document.querySelector('option[value="' + langue + '"]').selected = true;
    Type = tr.childNodes[5].innerHTML;
    document.querySelector('input[value="' + Type + '"]').checked = true;
}

function enregistrer() {
    titre = document.getElementById('Titre').value;
    auteur = document.getElementById('Auteur').value;
    Prix = document.getElementById('Prix').value;
    DateDePublication = document.getElementById('Datedepublication').value
    langue = document.getElementById('langue').value;
    Type = document.querySelector('input[name="category"]:checked').value;
    

    let valid = valider(titre,auteur,Prix,DateDePublication,langue,Type);
    if( valid == true ){
        tr = document.getElementById(id_modifier);
        tr.childNodes[0].innerHTML = titre;
        tr.childNodes[1].innerHTML = auteur;
        tr.childNodes[2].innerHTML = Prix;
        tr.childNodes[3].innerHTML = DateDePublication;
        tr.childNodes[4].innerHTML = langue;
        tr.childNodes[5].innerHTML = Type;
        document.getElementById('enregistre').disabled = true;
        document.getElementById('ajout').disabled = false;
    }

}

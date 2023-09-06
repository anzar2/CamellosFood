import { Component} from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfilUsuario.page.html',
  styleUrls: ['./perfilUsuario.page.scss', '../../camellosfood.theme.scss'],
})
export class PerfilUsuarioPage {
  
  cambiarNombre() {
    const name_input = document.getElementById("user_name") as HTMLInputElement;
    const edit_button = document.getElementById("edit_button_name") as HTMLButtonElement;
    const btn_submit = document.getElementById("btn_submit") as HTMLButtonElement;
    const btn_cancel = document.getElementById("btn_cancel") as HTMLButtonElement;
    const confirm_form = document.getElementById("confirm-form") as HTMLButtonElement;
    name_input.disabled = false;
    edit_button.disabled = true;
    confirm_form.style.display = 'flex';
    btn_submit.disabled = false;
    btn_cancel.disabled = false;

  }
  cambiarCorreo(){
    const email_input = document.getElementById("email") as HTMLInputElement;
    const edit_button = document.getElementById("edit_button_email") as HTMLButtonElement;
    const btn_submit = document.getElementById("btn_submit") as HTMLButtonElement;
    const btn_cancel = document.getElementById("btn_cancel") as HTMLButtonElement;
    const confirm_form = document.getElementById("confirm-form") as HTMLButtonElement;

    confirm_form.style.display = 'flex';
    email_input.disabled = false;
    edit_button.disabled = true;
    btn_submit.disabled = false;
    btn_cancel.disabled = false;
  }
  cancelarOperacion(){
    const name_input = document.getElementById("user_name") as HTMLInputElement;
    const edit_button_name = document.getElementById("edit_button_name") as HTMLButtonElement;
    const email_input = document.getElementById("email") as HTMLInputElement;
    const edit_button_email = document.getElementById("edit_button_email") as HTMLButtonElement;
    const confirm_form = document.getElementById("confirm-form") as HTMLButtonElement;

    name_input.disabled = false;
    edit_button_name.disabled = false;
    email_input.disabled = false;
    edit_button_email.disabled = false;

    confirm_form.style.display = 'none';
  }
}

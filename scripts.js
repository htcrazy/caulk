const select = document.querySelector('.terminal-commands');
const para = document.querySelector('.box-infoz');

select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    switch (choice) {
        case "mkdir":
            para.textContent = "mkdir POO";
            break;
        case "cd-parent":
            para.textContent = "cd ..";
            break;
        case "cd-root":
            para.textContent = "cd";
            break;
        case "cd-poo":
            para.textContent = "cd POO";
            break;
        case "git-clone":
            para.textContent = "git clone *SSH_link*";
            break;
        case "make-poo":
            para.textContent = "touch poo.sex";
            break;
        case "add-poo":
            para.textContent = "git add poo.sex";
            break;
        case "add-all":
            para.textContent = "git add -A";
            break;
        case "commit":
            para.textContent = "git commit -m 'message'";
            break;
        case "push":
            para.textContent = '"git push origin *branch-name*" or "git push origin main"';
            break;
        case "git-log":
            para.textContent = "git log";
            break;
        case "git-status":
            para.textContent = "git status";
            break;
        case "git-new-branch":
            para.textContent = "git checkout -b *branch-name*";
            break;
        case "branch-check":
            para.textContent = "git branch";
            break;
        case "change-branch":
            para.textContent = "git checkout *branch-name*";
            break;
        case "merge-branch":
            para.textContent = "git merge *branch-name*";
            break;
        case "delete-branch":
            para.textContent = "git branch -d *branch-name*";
            break;
        case "delete-branch-repo":
            para.textContent = "git push origin --delete *branch-name*";
            break;
        default:
            para.textContent = "";
    }
}
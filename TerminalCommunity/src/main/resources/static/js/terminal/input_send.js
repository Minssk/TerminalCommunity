var cmdInput = document.getElementById('cmd_input');
var cmdDiv = document.querySelector('.cmd');
var contentWrap = document.querySelector('.content_wrap');

cmdInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // 기본 Enter 동작 방지
        
        const inputValue = this.value; // 입력된 값 가져오기
		
		//빈값 무시 
        //if (inputValue.trim() === "") return;

        // 새로운 cmd_wrap 구조 만들기 (main_cmd 제외)
        const newCmdWrap = document.createElement('div');
        newCmdWrap.classList.add('cmd_wrap');
		newCmdWrap.classList.add('sub_line');

        // 안전하게 요소 생성
        const hostName = document.createElement('span');
        hostName.classList.add('host_name');
        hostName.textContent = 'anonymous@terminal.com';

        const hostColon = document.createElement('span');
        hostColon.classList.add('host_colon');
        hostColon.textContent = ':';

        const hostPath = document.createElement('span');
        hostPath.classList.add('host_path');
        hostPath.textContent = '/';

        const hostPoint = document.createElement('span');
        hostPoint.classList.add('host_point');
        hostPoint.innerHTML = '$&nbsp;';

        const commandText = document.createElement('span');
        commandText.textContent = inputValue; // 사용자 입력
		commandText.classList.add('host_value');

        // 생성한 요소를 새로운 cmd_wrap에 추가
        newCmdWrap.appendChild(hostName);
        newCmdWrap.appendChild(hostColon);
        newCmdWrap.appendChild(hostPath);
        newCmdWrap.appendChild(hostPoint);
        newCmdWrap.appendChild(commandText);

        // 새로운 구조를 main_cmd 위에 추가
        const mainCmd = document.querySelector('.main_cmd');
        cmdDiv.insertBefore(newCmdWrap, mainCmd); // main_cmd 위에 추가

		commandSend(inputValue);
		
        // 입력 필드 초기화
        this.value = "";
		scrollBottom();
    }
});

const scrollBottom = () => {
	contentWrap.scrollTop = contentWrap.scrollHeight;
}
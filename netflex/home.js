        
        // search 아이콘 클릭시 input text창 띄우기, 배경 클릭시 사라짐
        document.addEventListener('click', e =>{
            if(e.target.id == 'search' || e.target.id == 'search-box'){
                document.getElementById('search-box').style.display = 'inline';
            } else {
                document.getElementById('search-box').style.display = 'none';
            }
        });

        // 스크롤 이동시 백그라운드 컬러 변경
        window.addEventListener('scroll', ()=>{
            if(window.scrollY != 0){
                document.querySelector('#header-container-background').style.display = `block`;
            } else{
                document.querySelector('#header-container-background').style.display = `none`;
            }
          });



        // 알림아이콘 마우스 오버시 알림창 띄우기
        document.getElementById('bell').addEventListener('mouseover',(e)=>{
            document.getElementById('notification-pane').style.display = 'inline';
        });
        document.getElementById('virtualbox2').addEventListener('mouseover',(e)=>{
            document.getElementById('notification-pane').style.display = 'none';
        });
        document.getElementById('virtualbox3').addEventListener('mouseover',(e)=>{
            document.getElementById('notification-pane').style.display = 'none';
        });

        // 유저 아이콘 마우스 오버시 메뉴창 띄우기
        document.querySelector('.user-nav').addEventListener('mouseover',(e)=>{
            console.log('ok')
            document.querySelector('.user-elemList').style.display = 'inline';
        });
        document.querySelector('#virtualbox').addEventListener('mouseover',(e)=>{
            document.querySelector('.user-elemList').style.display = 'none';
        });
        document.querySelector('#virtualbox3').addEventListener('mouseover',(e)=>{
            document.querySelector('.user-elemList').style.display = 'none';
        });


        // replay버튼 클릭시 새로고침
        document.querySelector('.replayBtn-icon').addEventListener('click',()=>{
            location.reload();
        })

        
        let sound = false;
        // 상세정보 클릭시 info화면 띄우기
        document.querySelector('.infoBtn').addEventListener('click', ()=>{
            mute.innerHTML =  `<i class="fa-solid fa-volume-xmark"></i>`;

            // ----------------수정----------------
            sound = false;
            // ----------------수정----------------
            
            document.getElementById('info-container').style.display = 'block';
        })
        document.querySelector('#info-close-btn').addEventListener('click', ()=>{
            document.getElementById('info-container').style.display = 'none';
        })
        
        // sound 버튼 이벤트
        let mute = document.getElementById('mute-btn');
        function soundOnOff(){
            if(sound == false){
                mute.innerHTML =  `<i class="fa-solid fa-volume-high"></i>`;
                sound = true;
            } else{
                mute.innerHTML =  `<i class="fa-solid fa-volume-xmark"></i>`;
                sound = false;
            }
        }
        
    
        
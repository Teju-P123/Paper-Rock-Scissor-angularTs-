import { Component } from '@angular/core';

@Component({
  selector: 'app-main-com',
  templateUrl: './main-com.component.html',
  styleUrls: ['./main-com.component.css']
})
export class MainComComponent {

  start_but:boolean=false;

  start_game(){
    this.start_but=true;
  }

  user:number=0;
  num:number=0;
  res:number=0;
  
  t_match:number=0;

  h_win:number=0;
  h_draw:number=0;
  h_loss:number=0;
  
  m_win:number=0;
  m_draw:number=0;
  m_loss:number=0;

  overallwinner:string="";
  human_res:string="";
  machine_res:string="";

  l_img_url:string="/assets/rps_image/left_paper.jpeg";
  r_img_url:string="/assets/rps_image/right_paper.jpeg";

paper(){
  this.num=Math.floor(Math.random()*3)+1;

  this.user=10;
  this.res=this.user+this.num;
  this.final_result(this.res);
}
rock(){

 this.num=Math.floor(Math.random()*3)+1;

  this.user=20;
  this.res=this.user+this.num;
  this.final_result(this.res);

}
sci(){

  this.num=Math.floor(Math.random()*3)+1;

  this.user=30;
  this.res=this.user+this.num;
  this.final_result(this.res);

}

hwin:string="";
mwin:string="";
draw:string="";

final_result(a:number){
  if(this.t_match<6)
  switch(a){
    case 11: alert("paper wins");
    this.paper_win();
        break;
    case 12:alert("paper loss");
    this.paper_loss();
        break;
    case 13:alert("paper draw"); 
    this.paper_draw();
        break;   
      case 21: alert("rock wins");
      this.rock_win();
          break;
      case 22:alert("rock loss");
      this.paper_loss();
          break;
      case 23:alert("rock draw");
      this.rock_draw(); 
          break;   
        case 31: alert("scissor wins");
        this.sci_win();
            break;
        case 32:alert("scissor loss");
        this.sci_loss();
            break;
        case 33:alert("scissor draw"); 
        this.sci_draw();
            break;      

         }else{
          alert("<h1>Match over</h1>")
          this.start_but=false;
         }

      }
paper_win(){
  this.t_match=this.t_match+1;
  this.h_win=this.h_win+2;
  this.m_loss=this.m_loss+1;
  this.hwin="orange";
  this.mwin="yellow";
  this.l_img_url="/assets/rps_image/left_paper.jpeg";
  this.r_img_url="/assets/rps_image/right_rock.jpeg";


}
paper_loss(){
  this.t_match=this.t_match+1;
  this.m_win=this.m_win+2;
  this.h_loss=this.h_loss+1;
  this.hwin="yellow";
  this.mwin="white";
  this.l_img_url="/assets/rps_image/left_paper.jpeg";
  this.r_img_url="/assets/rps_image/right_sci.jpeg";
  
}
paper_draw(){
 
  this.t_match=this.t_match+1;
  this.h_draw=this.h_draw+1;
  this.m_draw=this.m_draw+1;
  this.hwin="yellow";
  this.mwin="yellow";

  this.l_img_url="/assets/rps_image/left_paper.jpeg";
  this.r_img_url="/assets/rps_image/right_paper.jpeg";

}
rock_win(){
  this.t_match=this.t_match+1;
  this.h_win=this.h_win+2;
  this.m_loss=this.m_loss+1;
  this.hwin="orange";
  this.mwin="yellow";
  this.l_img_url="/assets/rps_image/left_rock.jpeg";
  this.r_img_url="/assets/rps_image/right_sci.jpeg";

  
}
rock_loss(){
  this.t_match=this.t_match+1;
  this.m_win=this.m_win+2;
  this.h_loss=this.h_loss+1;
  this.hwin="pink";
  this.mwin="yellow";
  this.l_img_url="/assets/rps_image/left_rock.jpeg";
  this.r_img_url="/assets/rps_image/right_paper.jpeg";

  
}
rock_draw(){
  this.t_match=this.t_match+1;
  this.h_draw=this.h_draw+1;
  this.m_draw=this.m_draw+1;
  this.hwin="orange";
  this.mwin="orange";
  this.l_img_url="/assets/rps_image/left_rock.jpeg";
  this.r_img_url="/assets/rps_image/right_rock.jpeg";

  
}
sci_win(){
  this.t_match=this.t_match+1;
  this.h_win=this.h_win+2;
  this.m_loss=this.m_loss+1;
  this.hwin="orange";
  this.mwin="yellow";
  this.l_img_url="/assets/rps_image/left_sci.jpeg";
  this.r_img_url="/assets/rps_image/right_paper.jpeg";

  
}
sci_loss(){
  this.t_match=this.t_match+1;
  this.m_win=this.m_win+2;
  this.h_loss=this.h_loss+1;
  this.hwin="orange";
  this.mwin="white";
  this.l_img_url="/assets/rps_image/left_sci.jpeg";
  this.r_img_url="/assets/rps_image/right_rock.jpeg";

  
}
sci_draw(){
  this.t_match=this.t_match+1;
  this.h_draw=this.h_draw+1;
  this.m_draw=this.m_draw+1;
  this.hwin="orange";
  this.mwin="orange";
  this.l_img_url="/assets/rps_image/left_sci.jpeg";
  this.r_img_url="/assets/rps_image/right_sci.jpeg";

  
}




}

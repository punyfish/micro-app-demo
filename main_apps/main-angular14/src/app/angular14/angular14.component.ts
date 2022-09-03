import { Component, OnInit } from '@angular/core';
import config from '../../config';

@Component({
  selector: 'app-angular14',
  templateUrl: './angular14.component.html',
  styleUrls: ['./angular14.component.sass']
})
export class Angular14Component implements OnInit {

  constructor() {}

  url = `${config.angular14}/child/angular14/`

  microAppData = {msg: '来自基座的数据'}

  ngOnInit (): void {
  }

  handleCreate (): void {
    console.log('child-angular14 创建了')
  }

  handleBeforeMount (): void {
    console.log('child-angular14 即将被渲染')
  }

  handleMount (): void {
    console.log('child-angular14 已经渲染完成')

    setTimeout(() => {
      this.microAppData = {msg: '来自基座的新数据'}
    }, 2000)
  }

  handleUnmount (): void {
    console.log('child-angular14 卸载了')
  }

  handleError (): void {
    console.log('child-angular14 加载出错了')
  }

  handleDataChange (e: CustomEvent): void {
    console.log('来自子应用 child-angular14 的数据:', e.detail.data)
  }

}

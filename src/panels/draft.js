import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import PromoBanner from '@vkontakte/vkui/dist/components/PromoBanner/PromoBanner';
import {Link, PanelHeaderBack} from '@vkontakte/vkui';
import {Ask, Bomb, GameOver, Win, Switch, Flag} from "../icons/Icons";


import './style.css';

let cells = [];
let bombs = [];
let numbers = [];
let boardSize = 6;
let countBombs = 10;

class Home extends React.Component {

    componentDidMount() {
        this.getAdv();
        if ((window.screen.width/window.screen.height).toFixed(3)==='0.462'){
            document.documentElement.style.setProperty('--advOffset', `${136}px`);
        } else {
            document.documentElement.style.setProperty('--advOffset', `${100}px`);
        }
        // this.setRating();
        if (this._Ads && this._Menu) {
            const my = this._Menu.getBoundingClientRect().y;
            const ay = this._Ads.getBoundingClientRect().y;
            if (ay < my + 64) {
                this._Ads.style.top = `${my+64}px`
            }
        }
    }


    getAdv = () => {
        this.props.api.send("VKWebAppGetAds").then((promoBannerProps) => {
            this.setState({ promoBannerProps });
        });
    };

    componentWillMount() {
        this.props.blockSwipe(true);
        this.clear();
        let wsize = 490;
        if (this.props.platform !== 'web') {
            wsize = window.screen.width;
        }
        document.documentElement.style.setProperty('--sceneSize', `${wsize*0.95}px`);
        switch (this.props.size) {
            case 6:
                document.documentElement.style.setProperty('--cellSize', `${wsize*0.95/6 - 5}px`); //'48px'
                boardSize = 6;
                break;
            case 8:
                document.documentElement.style.setProperty('--cellSize', `${wsize*0.95/8 - 5}px`); //35
                boardSize = 8;
                break;
            case 10:
                document.documentElement.style.setProperty('--cellSize', `${wsize*0.95/10 - 5}px`); //27
                boardSize = 10;
                break;
            default:
                document.documentElement.style.setProperty('--cellSize', `${wsize*0.95/6 - 5}px`); //48
                boardSize = 6;
                break;
        }
        countBombs = this.props.bombs;
        this.setup();
    }

    state = {
        cells: [],
        flagMode: false,
        gameOver: false,
        bombs: 0,
        time: 0,
        win: false,
        switch: true,
        back: false,
        storyShow: false,
        published: false,
        isSceneShowed: true
    };

    clear = () => {
        clearInterval(this.int);
        cells = [];
        bombs = [];
        numbers = [];

        this.setState({gameOver: false, time: 0, win: false, bombs: 0, cells: []});

    };

    setBombs = (cx,cy) => {
        while (bombs.length !== countBombs) {
            let x = Math.floor(Math.random() * boardSize);
            let y = Math.floor(Math.random() * boardSize);
            if (!bombs.includes(`${x},${y}`) && `${x},${y}` !== `${cx},${cy}`) {
                bombs.push(`${x},${y}`);
                if (x > 0) numbers.push({x:x-1, y:y});
                if (x < boardSize - 1) numbers.push({x:x+1, y:y});
                if (y > 0) numbers.push({x:x, y:y-1});
                if (y < boardSize - 1) numbers.push({x:x, y:y+1});

                if (x > 0 && y > 0) numbers.push({x:x-1, y:y-1});
                if (x < boardSize - 1 && y < boardSize - 1) numbers.push({x:x+1, y:y+1});

                if (y > 0 && x < boardSize - 1) numbers.push({x:x+1, y:y-1});
                if (x > 0 && y < boardSize - 1) numbers.push({x:x-1, y:y+1});
            }
        }
    };

    setup = () =>{

        this.int = setInterval(()=>{
            this.setState({time: this.state.time + 1})
        },1000);

        for (let x = 0; x < boardSize; x++) {
            for (let y = 0; y < boardSize; y++) {
                cells.push({coords: {x: x, y: y}, checked: false, flagged: false});
            }
        }

        this.setState({cells: cells})
    };

    CellClick = (x, y, press=false) => {
        if (bombs.length === 0) {
            this.setBombs(x,y);
            numbers.forEach(num => {
                let cell = cells.filter((item)=>(item.coords.x === num.x && item.coords.y === num.y))[0];
                let dataNum = cell.num;
                if (!dataNum) dataNum = 0;
                cell.num = dataNum + 1;
            });
            this.setState({cells: cells});
        }

        if (x < 0 || y < 0 || x > boardSize-1 || y > boardSize-1) {return;}

        setTimeout(() => {
            this.checkVictory()
        }, 100);

        let c = this.state.cells;
        let item = c.filter((i)=>(i.coords.x === x && i.coords.y === y))[0];
        if (item.checked && item.num && press && !this.state.flagMode) {
            let b = 0;
            if (x-1 >= 0 && c.filter((i)=>(i.coords.x === x-1 && i.coords.y === y))[0].flagged) {b = b + 1}
            if (x+1 < boardSize && c.filter((i)=>(i.coords.x === x+1 && i.coords.y === y))[0].flagged) {b = b + 1}
            if (y+1 < boardSize && c.filter((i)=>(i.coords.x === x && i.coords.y === y+1))[0].flagged) {b = b + 1}
            if (y-1 >= 0 && c.filter((i)=>(i.coords.x === x && i.coords.y === y-1))[0].flagged) {b = b + 1}
            if (x-1 >= 0 && y-1 >= 0 && c.filter((i)=>(i.coords.x === x-1 && i.coords.y === y-1))[0].flagged) {b = b + 1}
            if (y+1 < boardSize && x+1 < boardSize && c.filter((i)=>(i.coords.x === x+1 && i.coords.y === y+1))[0].flagged) {b = b + 1}
            if (x-1 >= 0 && y+1 < boardSize && c.filter((i)=>(i.coords.x === x-1 && i.coords.y === y+1))[0].flagged) {b = b + 1}
            if (x+1 < boardSize && y-1 >= 0 && c.filter((i)=>(i.coords.x === x+1 && i.coords.y === y-1))[0].flagged) {b = b + 1}
            if (b === item.num){
                this.CellClick(x-1,y);
                this.CellClick(x+1,y);
                this.CellClick(x,y+1);
                this.CellClick(x,y-1);
                this.CellClick(x-1,y-1);
                this.CellClick(x+1,y+1);
                this.CellClick(x-1,y+1);
                this.CellClick(x+1,y-1);
            }
        }
        if (!this.state.flagMode){
            if (this.state.gameOver || item.checked || item.flagged) {return;}
            if (bombs.includes(`${x},${y}`)) {
                if (this.props.platform !== 'web'){
                    this.props.api.send("VKWebAppTapticNotificationOccurred", {"type": "error"})
                }
                this.setState({gameOver: true});
                clearInterval(this.int);
                return;
            }
            c.filter((i)=>(i.coords === item.coords))[0].checked = true;
            this.setState({cells: c});

            if (!bombs.includes(`${x},${y}`) && !item.num){
                this.CellClick(x-1,y);
                this.CellClick(x+1,y);
                this.CellClick(x,y+1);
                this.CellClick(x,y-1);
                this.CellClick(x-1,y-1);
                this.CellClick(x+1,y+1);
                this.CellClick(x-1,y+1);
                this.CellClick(x+1,y-1);
            }


        } else if (c.filter((i)=>(i.coords === item.coords))[0].flagged) {
            if (this.state.gameOver || item.checked) {return;}
            c.filter((i)=>(i.coords === item.coords))[0].flagged = false;
            this.setState({cells: c,bombs: this.state.bombs - 1});
        } else {
            if (this.state.gameOver || item.checked || this.state.bombs === bombs.length) {return;}
            c.filter((i)=>(i.coords === item.coords))[0].flagged = true;
            this.setState({cells: c, bombs: this.state.bombs + 1});
        }
    };


    checkVictory = () => {
        let win = true;
        this.state.cells.forEach((item, key)=> {
            if (!bombs.includes(`${item.coords.x},${item.coords.y}`) && !item.checked) {
                win = false
            }

        });
        if (win){
            this.setState({win: true});
            clearInterval(this.int)
        }
    };

    setColor = (num) => {
        switch (num) {
            case 1:
                return {color: '#2fb0ff'};
            case 2:
                return {color: '#5ac763'};
            case 3:
                return {color: '#d76c64'};
            case 4:
                return {color: '#953bc4'};
            default:
                return {color: '#440693'};
        }
    };

    setRating = async () => {
        const data = await this.props.api.send("VKWebAppStorageSet", {"keys": ["saperScore"]});
        if (isNaN(parseInt(data.keys[0].value)) || parseInt(data.keys[0].value) > this.state.time) {
            await this.props.api.send("VKWebAppStorageSet", {"key": "saperScore", "value": this.state.time})
        }
    };

    render() {
        // if (this.state.win && boardSize === 8 && countBombs === 10) {
        // 	this.setRating()
        // }

        return <Panel id={this.props.id} style={{position: 'fixed'}}>
            <PanelHeader left={<PanelHeaderBack onClick={()=>{
                if (!(this.state.win || this.state.gameOver)){
                    clearInterval(this.int);
                    this.setState({back: true});
                }
            }}/>}>Сапёр</PanelHeader>
            <div className='notification' style={this.state.storyShow ? {transform: `translateY(${window.screen.height/8}px)`}:{}}>
                {this.state.published ? <p>История загружена</p> : <p>История не загружена</p>}
            </div>

            <Group>
                <div className="main" >
                    <div className="status_bar">
                        <div className="status_bar__score">
                            <h1>{this.state.bombs}/{countBombs}</h1>
                        </div>
                        <div className="status_bar__time" >
                            <h1>{Math.floor(this.state.time/60)}:{Math.floor(this.state.time%60/10)}{this.state.time%60%10}</h1>
                        </div>
                    </div>
                    <div className="scene" >
                        {this.state.cells.map((item,key)=>(
                            <div
                                style={item.num ? this.setColor(item.num) : {}}
                                key={key}
                                onClick={(res)=>{res.persist();this.CellClick(item.coords.x, item.coords.y, true);}}
                                className={`scene__cell ${item.checked ? 'cell--checked' : ''} ${item.flagged ? 'cell--flagged' : ''}`}>
                                {this.state.gameOver && bombs.includes(`${item.coords.x},${item.coords.y}`) ? <Bomb/> : '' }
                                {item.num && item.checked && !bombs.includes(`${item.coords.x},${item.coords.y}`) ? item.num : ""}
                                {item.flagged ? <Flag /> : ''}
                            </div>
                        ))}
                    </div>
                    <div className="menu" ref={(ref)=>this._Menu = ref}>
                        <div style={{width: '142'}} onClick={()=>{this.setState({switch: !this.state.switch, flagMode: !this.state.flagMode })}}>
                            <Switch style={{margin: '0 auto', display: 'block', transition: '500ms'}} on={this.state.switch} />
                        </div>
                    </div>
                    <div className="ads" ref={(ref)=>this._Ads = ref}>
                        { this.state.promoBannerProps && <PromoBanner bannerData={ this.state.promoBannerProps } onClose={()=>{this.setState({promoBannerProps: null})}}/> }
                    </div>
                </div>

            </Group>
            {this.state.back || this.state.win || this.state.gameOver ? <div className="context_menu__wrap" onClick={()=>{
                if (!this.state.isSceneShowed) {
                    this.setState({isSceneShowed: true})
                }
            }}>
                <div className="context_menu" style={{height: this.state.win ? 435 : this.state.gameOver ? 425 : 405, display: this.state.isSceneShowed ? 'block' : 'none'}}> {/*id={this.state.gameOver ? 'alert' : ''}*/}
                    <div style={{display: this.state.gameOver ? 'block' : 'none'}} className='context_menu__hidebtn' onClick={()=>{this.setState({isSceneShowed: false})}}>
                        <span>✕</span>
                    </div>
                    {
                        this.state.win ?
                            <Win width={132} height={130} />
                            : this.state.gameOver ?
                                <GameOver  width={134} height={150}/>
                                :
                                <Ask width={134} height={170}/>
                    }
                    <h1 style={this.state.win ? {color: '#7ac663', margin: '0'} : {color: '#ff6150'}}>
                        {
                            this.state.win ?
                                'Вы выиграли'
                                : this.state.gameOver ?
                                    'Вы проиграли :('
                                    :
                                    'Завершить игру?'
                        }
                    </h1>
                    <p style={{textAlign: "center", fontSize: 17, width:'218px',  margin: '16px auto'}}>
                        {
                            this.state.win ?
                                'Вы безошибочно смогли отыскать все бомбы, виртуозно шагая между ними)'
                                : this.state.gameOver ?
                                    'К сожалению, ошибка оказалась роковой. Но это не повод расстраиваться, вы всегда можете начать заново)'
                                    :
                                    'Если Вы завершите игру, текущий результат будет безвозвратно утерян( '
                        }
                    </p>
                    {
                        this.state.win || this.state.gameOver ?
                            <Button style={{ background: '#5ac763', color: 'white'}} size="xl" mode="primary" onClick={(ref)=>{ref.persist();this.clear();this.setup();}}>Новая игра</Button>
                            : <Button style={{ background: '#5ac763', color: 'white'}} size="xl" mode="primary" onClick={(ref)=>{
                                ref.persist();
                                this.setState({back: false});
                                this.int = setInterval(()=>{
                                    this.setState({time: this.state.time + 1})
                                },1000);

                            }}>Отмена</Button>
                    }
                    <Button style={{margin: '5px 0', background: '#2fb0ff', color: 'white'}} size="xl" mode="secondary" onClick={(ref)=>{ref.persist();this.clear();this.props.blockSwipe(false);this.props.goBack();}}>Главное меню</Button>
                    {this.state.win ? <Button style={{margin: '5px 0', background: '#2fb0ff', color: 'white'}} size="xl" mode="secondary" onClick={(ref)=>{ref.persist();this.createStorie()}}>Поделиться</Button> : ''}
                </div>
            </div> : ''}
        </Panel>
    }

    createStorie = () => {
        this.props.api.send("VKWebAppShowStoryBox", {
            "background_type": "image",
            "locked": true,
            "url": "https://sun9-24.userapi.com/52i14XoV1NB0uCU57-xrZBqmFCCWo6Mhtj2uJg/Dx4_LWbzOo8.jpg",
            "stickers": [
                {
                    "sticker_type": "renderable",
                    "sticker": {
                        "can_delete": 0,
                        "content_type": "image",
                        "blob": this.createPhoto('Играть'),
                        "transform": {
                            'translation_x': 0.02,
                            'translation_y': -0.1,
                            'rotation': -8,
                            'relation_width': 0.4,
                            'gravity': 'left_bottom'
                        },
                        "clickable_zones": [
                            {
                                "action_type": "link",
                                "action": {
                                    "link": "https://vk.com/app7054038",
                                    "tooltip_text_key": "tooltip_open_default"
                                },
                                "clickable_area": [
                                    {
                                        "x": 0,
                                        "y": 0
                                    },
                                    {
                                        "x": 210,
                                        "y": 0
                                    },
                                    {
                                        "x": 210,
                                        "y": 80
                                    },
                                    {
                                        "x": 0,
                                        "y": 80
                                    }
                                ]

                            }
                        ]
                    }
                },
                {
                    "sticker_type": "renderable",

                    "sticker": {
                        "can_delete": 0,
                        "content_type": "image",
                        "blob": this.createPhoto(),
                        "transform": {
                            'translation_x': 0.02,
                            'translation_y': -0.28,
                            'rotation': 8,
                            'relation_width': 0.45
                        },
                        "clickable_zones": [
                            {
                                "action_type": "link",
                                "action": {
                                    "link": "https://vk.com/app7054038",
                                    "tooltip_text_key": "tooltip_open_default"
                                },
                                "clickable_area": [
                                    {
                                        "x": 0,
                                        "y": 0
                                    },
                                    {
                                        "x": 210,
                                        "y": 0
                                    },
                                    {
                                        "x": 210,
                                        "y": 80
                                    },
                                    {
                                        "x": 0,
                                        "y": 80
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]

        }).then((res)=>{
            if (res.result) {
                this.setState({storyShow: true, published: true});
                setTimeout(()=>{
                    this.setState({storyShow: false});
                    setTimeout(()=>this.setState({published: false}),500)
                }, 2000)
            }else {
                this.setState({storyShow: true});
                setTimeout(()=>{
                    this.setState({storyShow: false})
                }, 2000)
            }

        }).catch((e)=>{
            this.setState({storyShow: true});
            setTimeout(()=>{
                this.setState({storyShow: false})
            }, 2000)
        });
    };
    createPhoto = (text='') => {
        CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
            if (w < 2 * r) r = w / 2;
            if (h < 2 * r) r = h / 2;
            this.beginPath();
            this.moveTo(x+r, y);
            this.arcTo(x+w, y,   x+w, y+h, r);
            this.arcTo(x+w, y+h, x,   y+h, r);
            this.arcTo(x,   y+h, x,   y,   r);
            this.arcTo(x,   y,   x+w, y,   r);
            this.closePath();

            return this;
        };
        const can = document.createElement('canvas')
        can.width = 210;
        can.height = 80;
        const ctx = can.getContext('2d');
        ctx.fillStyle = text ? '#ff626c':"white";
        ctx.roundRect(0, 0, can.width, can.height, 50).fill();
        ctx.fillStyle =  text ? '#ffffff':"black";
        ctx.roundRect(0, 0, can.width, can.height, 50).stroke();
        ctx.font = text ? `${250/text.length}px Verdana` : "65px Verdana";
        if (text) {
            ctx.fillText(text,text ? 30 : 10,text ? 55 :65)
        } else {
            ctx.fillText(`${Math.floor(Math.floor(this.state.time/60)/10)}${Math.floor(this.state.time/60)%10}:${Math.floor(this.state.time%60/10)}${this.state.time%60%10}`,10,65)
        }

        ctx.imageSmoothingEnabled = ctx.mozImageSmoothingEnabled = ctx.webkitImageSmoothingEnabled = false; // for zoom!

        return can.toDataURL()
    };

}


export default Home;
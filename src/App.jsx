/* eslint-disable no-mixed-spaces-and-tabs */
import { useRef, useState } from 'react'
import './App.css'

function App() {
	const [styleToggle, setStyleToggle] = useState(true)
	const [text, setText] = useState()
	const [text2, setText2] = useState()
	const [text3, setText3] = useState()
	const [seconds, setSeconds] = useState(false)
	const tempText = useRef()
	const [triger, setTriger] = useState(true)
	{
		setTimeout(() => {
			setSeconds(true)
		}, 5000)
	}
	return (
		<>
			<div className='hero'>
				<div className={styleToggle ? 'main' : 'mainsecret'}>
					<h1 className={`${styleToggle ? 'Attempt' : 'Attempt-2'}`}>
						Добро пожаловать в твой личный кабинет, Luna aka 🌙{' '}
					</h1>
					<button
						className={`${styleToggle ? 'Attempt-3' : 'Attempt-4'}`}
						onClick={() => {
							setStyleToggle(!styleToggle)
						}}
					>
						Дальше?
					</button>
				</div>
				<div
					className={`${
						styleToggle
							? 'modular-1'
							: `${text == 'в компах' ? 'modular-attempt2' : 'modular-attempt'}`
					}`}
				>
					<div className='modular-1image'>
						<img src='./photo2.jpg' alt='' />
					</div>
					<h2>
						Хотел бы упомянуть, что твой день рождения уже прошел и вряд ли ты
						так быстро дошла до этой страницы учитывая что тебе лень. Август 12
						- 2023
					</h2>
					<label htmlFor=''>
						Чтобы тебе пройти дальше нужно ответить на несколько вопросов. Где
						мы познакомились?
					</label>
					<input
						onChange={e => {
							tempText.current = e.target.value
						}}
						value={text}
						type='text'
						placeholder='Ответ'
						maxLength={25}
					/>
					<button
						onClick={() => {
							tempText.current == 'в компах'
								? setText(tempText.current)
								: setTimeout(() => {
										setText('Не правильно')
										setTimeout(() => {
											setText('')
											setTimeout(() => {
												setText()
											}, 100)
										}, 1500)
								  }, 0)
						}}
					>
						Submit
					</button>
				</div>

				<div
					className={
						text == 'в компах' && text2 != 'Ерден'
							? 'modular-2attempt'
							: 'modular-2'
					}
				>
					<h2>
						Воу, ты уже столько прошла я думаю тебе стоит отдохнуть и подумать
						над тем что ты читаешь, может в этом есть какой то смысл?
					</h2>
					<p>Может тебе стоит вспомнить человека под номером 19?</p>
					<input
						onChange={e => {
							tempText.current = e.target.value
						}}
						value={text2}
						type='text'
						placeholder='Имя'
						maxLength={22}
					/>
					<button
						onClick={() => {
							tempText.current == 'Ерден'
								? setText2(tempText.current)
								: setTimeout(() => {
										setText2('Не правильно')
										setTimeout(() => {
											setText2('')
											setTimeout(() => {
												setText2()
											}, 100)
										}, 1500)
								  }, 0)
						}}
					>
						Submit
					</button>
				</div>
				{text2 == 'Ерден' && triger == true && text3 != 'квест' ? (
					<>
						<svg className='cloud' viewBox='0 0 115 105'>
							<path
								fill='white'
								d='M 25,60 
           a 20,20 1 0,0 0,40 
           h 50 
           a 20,20 1 0,0 0,-40 
           a 10,10 1 0,0 -15,-10 
           a 15,15 1 0,0 -35,10  
           z'
							/>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							version='1.1'
							className='moon'
						>
							<circle
								cx='100'
								cy='50'
								r='40'
								stroke='black'
								strokeWidth='2'
								fill='cyan'
							/>
							<circle
								cx='115'
								cy='50'
								r='30'
								stroke='black'
								strokeWidth='2'
								fill='black'
							/>
							<circle
								cx='130'
								cy='50'
								r='23'
								stroke='black'
								strokeWidth='2'
								fill='black'
							/>
						</svg>

						<div className={seconds ? 'anim-img' : 'hidden-img'}>
							<img src='./photo3.jpg' alt='' />

							<button
								onClick={() => {
									alert('Оп оп оп')
									setTriger(false)
									tempText.current = ''
								}}
							></button>
						</div>
					</>
				) : (
					<></>
				)}

				<div className={!triger ? 'prefinal_modular' : 'modular-3'}>
					<h2>
						Чтож скорее всего ты уже добралась до этой страницы и тебе придется
						найти 43°10(одиночная кавычка)05.3(Двойная кавычка)N 76°52(Одиночная
						кавычка)33.6(Двойная кавычка)E , после найти ключевое слово
						связанное с этим
					</h2>
					<input
						onChange={e => {
							tempText.current = e.target.value
						}}
						value={text3}
						type='text'
						placeholder='Слово'
						maxLength={22}
					/>
					<button
						onClick={() => {
							tempText.current == 'квест'
								? setText3(tempText.current)
								: setTimeout(() => {
										setText3('Не правильно')
										setTimeout(() => {
											setText3('')
											setTimeout(() => {
												setText3()
											}, 100)
										}, 1500)
								  }, 0)
						}}
					>
						Submit
					</button>
					{text3 == 'квест' ? (
						<>
							<a
								onClick={() => {
									setTriger(true)
								}}
								target='_blank'
								rel='noreferrer'
								href='https://drive.google.com/drive/folders/1FzlJhSfk3dadrcU41k_MGJxnxTUamk-z?usp=drive_link'
							>
								Ссылка
							</a>
							{(tempText.current = '')}
						</>
					) : (
						<>
							<h5>БУУУ 🎭🤣🤣🤣</h5>
						</>
					)}
				</div>
				<div
					className={
						triger && text2 == 'Ерден' && text3 == 'квест'
							? 'final'
							: 'modular-4'
					}
				>
					<h2>Мне тебя жаль но тебе придется додуматься или угадать</h2>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://i.stack.imgur.com/0MIzp.png'
					>
						Tap
					</a>
					<input
						onChange={e => {
							tempText.current = e.target.value
							tempText.current == 'Айсултан'
								? alert('Поздравляю тебя ты выиграла , 5000ms f12 press')
								: console.log(
										'Диана решает это очень долго, думаю ты изрядно попотела пока это делала хочу все также напомнить что ты очень хороший человек и я рад что познакомился с тобой так как я впервые мог так легко написать человеку как тебе :D'
								  )
						}}
						type='text'
						placeholder=''
						maxLength={8}
					/>
					{tempText.current == 'Айсултан'
						? console.log(
								'https://drive.google.com/file/d/1WSCBHi2IXyCvH2CkB9XUQsgO6z5akubY/view?usp=drive_link'
						  )
						: console.log(
								'https://drive.google.com/file/d/1WSCBHi2IXyCvH2CkB9XUQsgO6z5akubY/view?usp=drive_link'
						  )}
				</div>
			</div>
		</>
	)
}

export default App

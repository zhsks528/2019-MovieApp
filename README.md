## Toy Project - Movie_App



![movie_app](https://user-images.githubusercontent.com/38130934/50578276-f1615e80-0e7a-11e9-9170-c035d683b2e5.png)

### 사용기술

1. HTML
2. CSS
3. REACT



### 배운점

#### fetch / then / catch

```
fetch('URL')

.then(response => response.json())

.then(json = > json.보여주고싶은 data)

.catch(err = > console.log(err))
```

- **fetch** : url을 적으면 AJSX로 변환 
- **.then** : ~가 성공적으로 작동하면 실행하라는 명령어
- **.catch** : 오류를 잡을 때 쓰는 명령어



#### async & await

```
  _getMovies = async () => {
	const movies = await this._callApi();
	this.setState({
		movies
	});
  };
```

- **async** = **비동기식**으로 작동 시킨다.
- **await** = 작업이 정상적으로 작동/비작동을 따지는 것이 아닌 **완료**가 되면 실행하는 것.
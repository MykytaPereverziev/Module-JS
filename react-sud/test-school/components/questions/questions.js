const questions = [
    {
      //  id: 1, 
      
       title: `Сколько Alert-ов будет выброшено?
        for(i=5; i<10; i++){
          for (j=i; j<i+1; j++){
            alert(j);
          }
        }
       `,
       type: 'SELECT',
       answers: [
            {   title: " 4",
                isTrue: true,
                point: 5
       },
       {     title:  " 5",
             isTrue: false,
             point: 0

       },
       {     title:  " 6",
             isTrue: false,
             point: 0

 },
 {          title:  " undefined",
            isTrue: false,
            point: 0

},]
},
{
    // id: 2, 
    title: "If I’m not mistaken, she comes from ________ Netherlands.",
    type: 'SELECT',
    answers: [
         {   title: " - ",
             isTrue: false,
             point: 0
    },
    {     title:  " a ",
          isTrue: false,
          point: 0

    },
    {     title:  " the ",
          isTrue: true,
          point: 5

},
{        title:  "  an ",
         isTrue: false,
         point: 0

},]
},

{
    // id: 3, 
    title: "You have a pet, ______?",
    type: 'SELECT',
    answers: [
         {   title: " don’t you?",
             isTrue: true,
             point: 5
    },
    {     title:  " didn’t you?",
          isTrue: false,
          point: 0

    },
    {     title:  " haven’t you?",
          isTrue: false,
          point: 0

},
{          title:  " aren’t you?",
         isTrue: false,
         point: 0

},]
},
{
      title: `Еденица измерения силы тока-это:`,
      type: 'SELECT',
      answers: [
        {
          title: 'Ампер',
          isTrue: true,
          point: 1,
        },
        {
          title: 'Вольт',
          isTrue: false,
          point: 0,
        },
        {
          title: 'Ватт',
          isTrue: false,
          point: 0,
        },
      ]
    },
    {
      title: `Сатурн это какая по счету планета от солнца?`,
      type: 'TEXT',
      answers: 6,
      point: 1,
    },
    {
      title: `Какой элемент периодической системы хим. элементов обозначается как Ag ?`,
      type: 'RADIO',
      answers: [
        {
          title: 'Золото',
          isTrue: false,
          point: 0,
        },
        {
          title: 'Серебро',
          isTrue: false,
          point: 0,
        },
        {
          title: 'Аргон',
          isTrue: true,
          point: 1,
        },
      ]
    },
    {
      title: `Что из перечисленного является языком програмирования?`,
      type: 'CHECKBOX',
      answers: [
        {
          title: 'C#',
          isTrue: true,
          point: 1,
        },
        {
          title: 'СSS',
          isTrue: false,
          point: 0,
        },
        {
          title: 'JS',
          isTrue: true,
          point: 1,
        },
      ]
    },
    {
      title: `Выберите, какие виды конструкторов является в С +:`,
      type: 'CHECKBOX',
      answers: [
        {
          title: 'Конструктор по умолчанию',
          isTrue: true,
          point: 1,
        },
        {
          title: 'Конструктор копирования',
          isTrue: true,
          point: 1,
        },
        {
          title: 'Конструктор присваивания',
          isTrue: false,
          point: 0,
        },
        {
          title: 'Конструктор перемещения',
          isTrue: false,
          point: 0,
        },
        {
          title: 'Конструктор с параметрами',
          isTrue: true,
          point: 1,
        }
      ]
    }
];

export default questions;
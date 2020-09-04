        
       var exp = '';    
       var outerDiv = document.createElement("div");
        outerDiv.style.height = "529px";
        outerDiv.style.width = "326px";
        outerDiv.style.border = "1px solid red";
        outerDiv.style.marginLeft = "auto";
        outerDiv.style.marginRight = "auto";

        document.body.appendChild(outerDiv);
        
        var headerDiv = document.createElement('div');
        headerDiv.style.height = "50px";
        headerDiv.style.width = "100%";
        headerDiv.style.border = "1px solid red";

        outerDiv.appendChild(headerDiv);

        var headerLeftChild = document.createElement('div');
        
        headerLeftChild.style.display = "inline-block";
        headerLeftChild.style.width = "50%";
        headerLeftChild.style.height = "100%";
        headerLeftChild.style.cssFloat = "left";
        headerLeftChild.style.padding = "10px";
        headerLeftChild.style.lineHeight = "100%";
        headerLeftChild.innerText = "calculator";
        headerDiv.appendChild(headerLeftChild);

        var headerRightChild = document.createElement('div');
        headerRightChild.style.display = "inline-block";
        headerRightChild.style.width = "50%";
        headerRightChild.style.height = "100%";
        headerRightChild.style.cssFloat = "right";
        headerRightChild.style.padding = "10px";
        headerRightChild.innerHTML = "&#10006;";
        headerRightChild.style.textAlign = "right";
        headerRightChild.style.cursor = "pointer";
        headerDiv.appendChild(headerRightChild);

        var displayArea1 = document.createElement('div');
        
        displayArea1.style.height = "100px";
        displayArea1.style.border = "1px solid red";
        displayArea1.style.textAlign = "right";
        displayArea1.style.fontSize = "25px";
        displayArea1.style.paddingRight = "30px";

        outerDiv.appendChild(displayArea1);

        var displayArea2 = document.createElement('div');
        displayArea2.style.height = "50px";
        displayArea2.style.border = "1px solid red";
        displayArea2.style.textAlign = "right";
        displayArea2.style.fontSize = "40px";
        displayArea2.style.paddingRight = "30px";

        outerDiv.appendChild(displayArea2);

        var gridArea = document.createElement('div');
        gridArea.style.display="grid";
        gridArea.style.gridTemplateColumns="auto auto auto auto";
        gridArea.style.gridTemplateRows="auto auto auto auto";
        gridArea.style.backgroundColor="#2196F3";
        gridArea.style.gridGap="3px";
        gridArea.style.width="100%";
        gridArea.style.height="320px";

        outerDiv.appendChild(gridArea);

        var gridChild1 = document.createElement('div');
        createGridCell(gridChild1, "7");
        gridChild1.addEventListener('click', displaynumber, false);

        var gridChild2 = document.createElement('div');
        createGridCell(gridChild2, "8");
        gridChild2.addEventListener('click', displaynumber, false);

        var gridChild3 = document.createElement('div');
        createGridCell(gridChild3, "9");
        gridChild3.addEventListener('click', displaynumber, false);
        
        var gridChild4 = document.createElement('div');
        createGridCell(gridChild4, "*");
        gridChild4.addEventListener('click', displaynumber, false);
        
        var gridChild5 = document.createElement('div');
        createGridCell(gridChild5, "4");
        gridChild5.addEventListener('click', displaynumber, false);

        var gridChild6 = document.createElement('div');
        createGridCell(gridChild6, "5");
        gridChild6.addEventListener('click', displaynumber, false);

        var gridChild7 = document.createElement('div');
        createGridCell(gridChild7, "6");
        gridChild7.addEventListener('click', displaynumber, false);

        var gridChild8 = document.createElement('div');
        createGridCell(gridChild8, "-");
        gridChild8.addEventListener('click', displaynumber, false);

        var gridChild9 = document.createElement('div');
        createGridCell(gridChild9, "1");
        gridChild9.addEventListener('click', displaynumber, false);

        var gridChild10 = document.createElement('div');
        createGridCell(gridChild10, "2");
        gridChild10.addEventListener('click', displaynumber, false);

        var gridChild11 = document.createElement('div');
        createGridCell(gridChild11, "3");
        gridChild11.addEventListener('click', displaynumber, false);

        var gridChild12 = document.createElement('div');
        createGridCell(gridChild12, "+");
        gridChild12.addEventListener('click', displaynumber, false);

        var gridChild13 = document.createElement('div');
        createGridCell(gridChild13, "c");
        gridChild13.addEventListener('click', displaynumber, false);

        var gridChild14 = document.createElement('div');
        createGridCell(gridChild14, "0");
        gridChild14.addEventListener('click', displaynumber, false);

        var gridChild15 = document.createElement('div');
        createGridCell(gridChild15, "=");
        gridChild15.addEventListener('click', displaynumber, false);

        var gridChild16 = document.createElement('div');
        createGridCell(gridChild16, "/");
        gridChild16.addEventListener('click', displaynumber, false);
        
        gridArea.append(gridChild1, gridChild2, gridChild3, gridChild4, gridChild5, gridChild6, 
        gridChild7, gridChild8,
        gridChild9, gridChild10, gridChild11, gridChild12,
        gridChild13, gridChild14, gridChild15, gridChild16);

        function createGridCell(element,innertext)
        {
                element.style.backgroundColor="white";
                element.style.padding="10px";
                element.innerText= innertext;
                element.style.fontSize="25px";
                element.style.textAlign="center";
                element.style.color="black";
                element.style.cursor="pointer";
        }

        function displaynumber(event)
        {
              displayArea1.innerText = displayArea1.innerText + event.target.innerText;
              if(event.target.innerText == '+' || event.target.innerText == '-' ||
                 event.target.innerText == '*' || event.target.innerText == '/' )
              {
                exp = eval(exp);
                displayArea2.innerText = exp;
                exp = exp +  event.target.innerText;
              }
              else
              {
                if(event.target.innerText == '=')
                {
                exp= eval(exp);
                displayArea1.innerText = exp;
                displayArea2.innerText = exp;
                }
                else if(event.target.innerText == 'c')
                {
                  displayArea1.innerText ='';
                  displayArea2.innerText = '';
                  exp ='';
                }
                else
                {
                   exp = exp + event.target.innerText; 
                }
              }
                            
        }

let cont = document.getElementById('root')
let root = ReactDOM.createRoot(cont)
root.render(
    <>

    <Introduction/>
    <Expressions/>
    <Resta/>

    <Names name="sujith kumar" />
    <Names name="sreeja" />
    <Names name="latha" />

    <Books name='Emperor Domination' author='immortal emperor Bai Xu' />
    <Books name='Douluo Dalu' author='Tang Sa Yu' />

    <RestaurantCard name="Andhra Ruchulu" rating={4.5} time={60} />
    <RestaurantCard name="Pitas Babachi" rating={3.9} time={20} />
    <RestaurantCard name="Guntur biryani" rating={3.5} time={90} />
    <RestaurantCard name='hello bro'/>


    <div>
        <ChildrenProps>
            <h3>Mahesh babu</h3>
            <p>kaleja</p>
        </ChildrenProps>
        <ChildrenProps>
            <h3>pavan kalyan</h3>
            <p>og</p>
        </ChildrenProps>
        <ChildrenProps>
            <h3>balaya babu</h3>
            <p>simha</p>
        </ChildrenProps>
        <ChildrenProps>
            <Books name='Tale of Hearding God' author='su yin' />
            <Names name="chandana" />
        </ChildrenProps>
    </div>


        <Restatunts/>

        <Resdatas/> 
        <Conditional/>
        <HandlingClicks/>
        <OnsChange/>
        {/* <Onsubmits/>

        <IncreButton/>
        <ControlledInput/>
        <Forms/> */}
        {/* <OneState/>
        <Checboxes/>
        <AllTemp/>
        <Parent/> */}
    

       {/* <TailwindPrac/>  */}
        
    </>
)

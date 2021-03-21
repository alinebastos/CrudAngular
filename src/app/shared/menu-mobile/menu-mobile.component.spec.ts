import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';


import {TokenService} from '../../services/token/token.service';
import {SigninService} from '../../services/signin/signin.service';
import {MenuMobileComponent} from './menu-mobile.component';
import {Router} from '@angular/router';


describe('FormLoginComponent', () => {
  let component: MenuMobileComponent;
  let fixture: ComponentFixture<MenuMobileComponent>;
  let service: SigninService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMobileComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        SigninService,
        TokenService,
        FormBuilder
      ]
    })
      .compileComponents();
  });
  beforeEach(() => {
    service = TestBed.inject( SigninService );
    fixture = TestBed.createComponent(MenuMobileComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Has Route',  () => {
    router.navigate(['/']);
    expect(component.hasRoute()).toBeFalse();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
